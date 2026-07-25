"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Phone, CheckCircle, Star } from "lucide-react";
import { useEffect, useState } from "react";

const PHONE_NUMBER = "0932912020";
const PHONE_HREF = "tel:0932912020";

const motorcycleImages = Array.from(
  { length: 10 },
  (_, i) => `/motorcycles/bike${i + 1}.jpg`
);

export default function HeroSection() {
  const [currentImg, setCurrentImg] = useState(0);

  // Auto-cycle through motorcycle images every 3.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % motorcycleImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background slideshow from motorcycle images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImg}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <Image
              src={motorcycleImages[currentImg]}
              alt={`Motorcycle ${currentImg + 1}`}
              fill
              priority={currentImg === 0}
              className="object-cover"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/80 z-10" />
        {/* Blue accent */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/35 via-transparent to-transparent z-10" />
      </div>

      {/* Slide dots indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {motorcycleImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImg(i)}
            className={`rounded-full transition-all duration-300 ${
              i === currentImg
                ? "w-6 h-2 bg-white"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Animated background orbs */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-green-500/10 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "20%", right: "10%" }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 py-20 max-w-4xl mx-auto">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5 drop-shadow-lg"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          🏍️ ዘላለም ይበልጣል
          <br />
          <span className="text-blue-300">የሞተርሳይክል ሽያጭ</span>
        </motion.h1>

        {/* Feature list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col items-center gap-2 mb-6"
        >
          {[
            "100% አዲስ ሞተርሳይክሎች",
            "2025 / 2026 ሞዴሎች",
            "ሙሉ ህጋዊ ሰነዶች (ሊብሬ)",
            "ተመጣጣኝ ዋጋ",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-2 text-white/90 text-base md:text-lg font-medium"
            >
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span>{item}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-white/80 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          ከ <strong className="text-yellow-300">65,000 ብር</strong> እስከ{" "}
          <strong className="text-yellow-300">90,000 ብር</strong> ድረስ 100% አዲስ
          የሞተርሳይክል ሞዴሎች በተመጣጣኝ ዋጋ ያገኛሉ። ዛሬውኑ ይደውሉን።
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.a
            href={PHONE_HREF}
            className="btn-cta text-lg md:text-xl px-8 py-4 rounded-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Phone className="w-6 h-6" />
            📞 አሁኑኑ ይደውሉ
          </motion.a>

          <motion.a
            href={PHONE_HREF}
            className="flex items-center gap-2 text-white/90 text-xl md:text-2xl font-bold tracking-wider hover:text-green-400 transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
          >
            <Phone className="w-5 h-5" />
            {PHONE_NUMBER}
          </motion.a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          {["ፈጣን ማድረስ", "ዋስትና", "ህጋዊ ሰነዶች"].map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-white text-sm font-medium"
            >
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
