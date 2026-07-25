"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Expand } from "lucide-react";
import Lightbox from "./Lightbox";

const motorcycleImages = Array.from({ length: 10 }, (_, i) => `/motorcycles/bike${i + 1}.jpg`);

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export default function MotorcyclesSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-white" id="motorcycles">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            ዋና ሞዴሎች
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            🏍️ ዋና የሞተርሳይክል ሞዴሎች
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            ምርጥ የሞተርሳይክል ሞዴሎቻችን ይመልከቱ። ሁሉም 100% አዲስ ናቸው።
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-5" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
          {motorcycleImages.map((src, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-400"
              onClick={() => setLightboxIndex(i)}
              style={{ boxShadow: "0 4px 20px rgba(30, 64, 175, 0.08)" }}
            >
              <div className="relative aspect-[4/3] w-full bg-gray-100">
                <Image
                  src={src}
                  alt={`Motorcycle model ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading={i < 4 ? "eager" : "lazy"}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Expand icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                    <Expand className="w-6 h-6 text-white" />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={motorcycleImages}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            altPrefix="Motorcycle"
          />
        )}
      </AnimatePresence>
    </section>
  );
}
