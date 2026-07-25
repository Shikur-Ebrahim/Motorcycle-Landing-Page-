"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Expand } from "lucide-react";
import Lightbox from "./Lightbox";

// Automatically load all 11 gallery images
const galleryImages = Array.from({ length: 11 }, (_, i) => `/gallery/gallery${i + 1}.jpg`);

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: "easeOut" as const },
  }),
};

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-gradient-to-b from-slate-50 to-white" id="gallery">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            ተጨማሪ የሞተርሳይክል ሞዴሎች
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            ሌሎች ሞዴሎቻችን ይመልከቱ። ሁሉም ምርጥ ጥራት አላቸው።
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-green-500 to-green-300 rounded-full mx-auto mt-5" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-400"
              onClick={() => setLightboxIndex(i)}
              style={{ boxShadow: "0 4px 20px rgba(22, 163, 74, 0.07)" }}
            >
              <div className="relative aspect-[4/3] w-full bg-gray-100">
                <Image
                  src={src}
                  alt={`Gallery motorcycle ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
            images={galleryImages}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            altPrefix="Gallery"
          />
        )}
      </AnimatePresence>
    </section>
  );
}
