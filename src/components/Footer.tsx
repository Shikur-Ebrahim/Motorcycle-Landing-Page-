"use client";

import { motion } from "framer-motion";
import { Phone, Heart } from "lucide-react";

const PHONE_HREF = "tel:0932912020";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden py-12 px-4"
      style={{ background: "#0f172a" }}
    >
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-blue-400 to-green-500" />

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl md:text-3xl font-black text-white mb-1">
              🏍️ ዘላለም ይበልጣል
            </div>
            <div className="text-blue-400 font-semibold text-base">
              የሞተርሳይክል ሽያጭ
            </div>
          </motion.div>

          {/* Divider */}
          <div className="w-16 h-0.5 bg-white/10" />

          {/* Phone */}
          <motion.a
            href={PHONE_HREF}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-white hover:text-green-400 transition-colors duration-300 group"
          >
            <div className="w-10 h-10 bg-green-500/20 group-hover:bg-green-500/30 rounded-full flex items-center justify-center transition-colors duration-300">
              <Phone className="w-5 h-5 text-green-400" />
            </div>
            <span className="text-xl font-bold tracking-wider">☎️ 0932912020</span>
          </motion.a>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/40">
            <a href="#motorcycles" className="hover:text-white/70 transition-colors">ሞዴሎች</a>
            <a href="#gallery" className="hover:text-white/70 transition-colors">ጋለሪ</a>
            <a href="#license" className="hover:text-white/70 transition-colors">ፍቃድ</a>
            <a href="#features" className="hover:text-white/70 transition-colors">አገልግሎቶች</a>
            <a href="#contact" className="hover:text-white/70 transition-colors">አስይዙ</a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/5" />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/30 text-sm flex items-center gap-2 flex-wrap justify-center"
          >
            <span>© 2026 ዘላለም ይበልጣል የሞተርሳይክል ሽያጭ</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> in Ethiopia
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
