import React from "react";
import { motion } from "framer-motion";

const Modal = () => {
  return (
    <motion.div
      className="h-screen flex items-center justify-center bg-yellow-400"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl lg:text-6xl font-bold text-white text-center">
        Добро пожаловать в Taxi-Landing
      </h1>
    </motion.div>
  );
};

export default Modal;