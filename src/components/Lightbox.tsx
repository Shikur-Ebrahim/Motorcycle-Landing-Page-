"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

interface LightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
  altPrefix?: string;
}

export default function Lightbox({
  images,
  initialIndex,
  onClose,
  altPrefix = "Image",
}: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartDist = useRef<number | null>(null);
  const dragX = useMotionValue(0);

  const goNext = useCallback(() => {
    setDirection(1);
    setScale(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setScale(1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartX.current = e.touches[0].clientX;
    } else if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      touchStartDist.current = Math.sqrt(dx * dx + dy * dy);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null && e.changedTouches.length === 1 && scale === 1) {
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? goNext() : goPrev();
      }
    }
    touchStartX.current = null;
    touchStartDist.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && touchStartDist.current !== null) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const newDist = Math.sqrt(dx * dx + dy * dy);
      const newScale = Math.min(4, Math.max(1, scale * (newDist / touchStartDist.current)));
      setScale(newScale);
      touchStartDist.current = newDist;
    }
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
  };

  return (
    <motion.div
      className="lightbox-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-200 backdrop-blur-sm border border-white/20"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Zoom controls */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        <button
          onClick={(e) => { e.stopPropagation(); setScale((s) => Math.max(1, s - 0.5)); }}
          className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 transition-all duration-200 backdrop-blur-sm border border-white/20"
          aria-label="Zoom out"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <span className="bg-white/10 text-white px-3 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20">
          {Math.round(scale * 100)}%
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); setScale((s) => Math.min(4, s + 0.5)); }}
          className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 transition-all duration-200 backdrop-blur-sm border border-white/20"
          aria-label="Zoom in"
        >
          <ZoomIn className="w-5 h-5" />
        </button>
      </div>

      {/* Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Prev Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          className="absolute left-3 md:left-6 z-50 bg-white/10 hover:bg-white/25 text-white rounded-full p-3 md:p-4 transition-all duration-200 backdrop-blur-sm border border-white/20"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
        </button>
      )}

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          className="absolute right-3 md:right-6 z-50 bg-white/10 hover:bg-white/25 text-white rounded-full p-3 md:p-4 transition-all duration-200 backdrop-blur-sm border border-white/20"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
        </button>
      )}

      {/* Image */}
      <div
        className="relative w-full h-full flex items-center justify-center px-16 py-20"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative max-w-5xl w-full"
            style={{ height: "75vh" }}
          >
            <Image
              src={images[currentIndex]}
              alt={`${altPrefix} ${currentIndex + 1}`}
              fill
              className="object-contain"
              style={{ transform: `scale(${scale})`, transition: "transform 0.2s ease" }}
              sizes="100vw"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
