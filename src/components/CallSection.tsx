"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const PHONE_NUMBER = "0932912020";
const PHONE_HREF = "tel:0932912020";

export default function CallSection() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      id="contact"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1e40af 100%)",
      }}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-full mb-6"
        >
          <Phone className="w-4 h-4 text-green-400" />
          ዛሬውኑ ያዝዙ
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight"
        >
          📞 ዛሬውኑ ይደውሉ
          <br />
          <span className="text-green-400">የሚፈልጉትን ሞተርሳይክል ያግኙ!</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 text-base md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          ለበለጠ መረጃ ወይም ለማዘዝ አሁኑኑ ይደውሉልን።
          <br />
          ምርጥ ሞተርሳይክል በምርጥ ዋጋ ያቀርባሉ።
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        >
          <motion.a
            href={PHONE_HREF}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black text-lg md:text-xl px-8 py-5 rounded-2xl shadow-2xl shadow-green-500/40 transition-all duration-300"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Phone className="w-6 h-6 fill-white" />
            📞 {PHONE_NUMBER} ይደውሉ
          </motion.a>
        </motion.div>

        {/* Phone number prominent display */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-3"
        >
          <a
            href={PHONE_HREF}
            className="text-4xl md:text-6xl font-black text-white tracking-widest hover:text-green-400 transition-colors duration-300"
          >
            {PHONE_NUMBER}
          </a>
          <p className="text-white/50 text-sm flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            አሁኑኑ ይደውሉ - ዝቅተኛ ዋጋ ያቀርባሉ
          </p>
        </motion.div>

        {/* Decorative card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            { icon: "🏍️", title: "ምርጥ ሞዴሎች", desc: "2025/2026 ሞዴሎች" },
            { icon: "💰", title: "ምርጥ ዋጋ", desc: "ከ 65,000 ብር ጀምሮ" },
            { icon: "📋", title: "ሙሉ ሰነዶች", desc: "ሊብሬ ጋር" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-5 text-center"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-white font-bold text-base mb-1">{item.title}</div>
              <div className="text-white/60 text-sm">{item.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
