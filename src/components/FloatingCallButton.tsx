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
      {/* Aggressive Pulsing ring effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-green-500/50"
        animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-green-400/30"
        animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.2 }}
      />

      <motion.a
        href={PHONE_HREF}
        aria-label="ይደውሉ - Call Now"
        className="relative flex items-center gap-3 bg-gradient-to-r from-green-500 via-green-600 to-green-500 text-white px-6 py-5 md:px-8 md:py-6 rounded-full border-2 border-white/40"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ boxShadow: "0 12px 40px rgba(22, 163, 74, 0.8)" }}
      >
        <motion.div
          animate={{ rotate: [0, -20, 20, -20, 20, -10, 10, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1.5 }}
        >
          <Phone className="w-8 h-8 md:w-10 md:h-10 fill-white" />
        </motion.div>
        <span className="text-xl md:text-2xl font-black tracking-wide">ይደውሉ</span>
      </motion.a>
    </motion.div>
  );
}
