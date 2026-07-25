"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

const PHONE_HREF = "tel:0932912020";

export default function FloatingCallButton() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 200 }}
    >
      {/* Pulsing ring effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-green-500/40"
        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-green-500/25"
        animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
      />

      <motion.a
        href={PHONE_HREF}
        aria-label="ይደውሉ - Call Now"
        className="relative flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-4 py-4 md:px-5 md:py-4 rounded-full shadow-2xl shadow-green-500/40 border-2 border-green-400/50"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        style={{ boxShadow: "0 8px 32px rgba(22, 163, 74, 0.5)" }}
      >
        <motion.div
          animate={{ rotate: [0, 15, -15, 10, -10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
        >
          <Phone className="w-8 h-8 fill-white" />
        </motion.div>
        <span className="hidden md:inline text-sm font-bold">ይደውሉ</span>
      </motion.a>
    </motion.div>
  );
}
