"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


export default function ValentineApp() {
  const [yesSize, setYesSize] = useState(1);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [messageIndex, setMessageIndex] = useState(0);
  const [accepted, setAccepted] = useState(false);

  const messages = [
    "¿Estás seguro? 🥺",
    "Por favor 💖",
    "Pon que siiii",
    "Piénsalo de nuevo 😢",
    "Quizás te arrepientas... ",
    "Última oportunidad"
  ];

  const moveNoButton = () => {
    if (messageIndex < messages.length - 1) {
      setNoPosition({
        x: (Math.random() - 0.5) * 300,
        y: (Math.random() - 0.5) * 300
      });
      setYesSize(yesSize + 0.2);
      setMessageIndex((prev) => prev + 1);
    }
  };

  if (accepted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-pink-100">
        <h1 className="text-4xl font-bold text-red-500">Sabía que aceptarías 💖</h1>
        <div className="grid grid-cols-3 gap-4 mt-6">
        <Image src="/love0.webp" alt="Cat love" width={128} height={128} className="w-32 h-32 rounded-lg" />

        <Image src="/love2.webp" alt="Cat love 2" width={128} height={128} className="w-32 h-32 rounded-lg" />
        <Image src="/love3.webp" alt="Cat love 3" width={128} height={128} className="w-32 h-32 rounded-lg" />
        <Image src="/love4.webp" alt="Cat love 4" width={128} height={128} className="w-32 h-32 rounded-lg" />
        <Image src="/love5.webp" alt="Cat love 5" width={128} height={128} className="w-32 h-32 rounded-lg" />
        <Image src="/love6.webp" alt="Cat love 6" width={128} height={128} className="w-32 h-32 rounded-lg" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100">
      <h1 className="text-4xl font-bold text-red-500">¿Quieres ser mi San Valentín?</h1>
      <p className="text-lg text-gray-700 mt-4">{messages[messageIndex]}</p>
      <div className="flex mt-6 space-x-4">
        <motion.button
          className="bg-red-500 text-white font-bold py-2 px-6 rounded-full"
          style={{ transform: `scale(${yesSize})` }}
          onClick={() => setAccepted(true)}
        >
          Si
        </motion.button>
        <motion.button
          className={`font-bold py-2 px-6 rounded-full ${messageIndex === messages.length - 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-400 text-white"}`}
          onClick={moveNoButton}
          animate={{ x: noPosition.x, y: noPosition.y }}
          transition={{ type: "spring", stiffness: 300 }}
          disabled={messageIndex === messages.length - 1}
        >
          No
        </motion.button>
      </div>
    </div>
  );
}
