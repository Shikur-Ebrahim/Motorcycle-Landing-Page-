"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function LicenseSection() {

  return (
    <section className="section-padding bg-white" id="license">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >

          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            📄 የንግድ ፍቃድ
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            እኛ ሙሉ ህጋዊ ፍቃድ ያለን ተሰጥኦ የሞተርሳይክል ሽያጭ ነን።
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mx-auto mt-5" />
        </motion.div>

        {/* License Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-2xl"
        >
          {/* Decorative border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-3xl blur-sm opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

          <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-100">


            {/* Image */}
            <div className="relative w-full bg-slate-50 flex items-center justify-center p-2 md:p-4 overflow-hidden">
              <img
                src="/license/license.jpg"
                alt="Business License - የንግድ ፍቃድ"
                className="w-full h-auto max-h-[85vh] object-contain shadow-sm rounded-lg"
                loading="lazy"
              />
            </div>

            {/* Bottom badge */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-t border-green-100 px-6 py-4 flex items-center justify-center gap-3">
              <div className="flex items-center gap-2 text-green-700 font-semibold">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                ሙሉ ህጋዊ ሰነዶች አሉን
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
