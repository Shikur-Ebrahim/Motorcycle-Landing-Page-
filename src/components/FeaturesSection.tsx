"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Truck,
  FileCheck,
  DollarSign,
  Fuel,
  Shield,
  Star,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "100% አዲስ ሞተርሳይክሎች",
    description: "ሁሉም ሞተርሳይክሎቻችን 100% አዲስ ናቸው",
    color: "from-blue-500 to-blue-600",
    bg: "from-blue-50 to-blue-100/50",
    border: "border-blue-200/60",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Star,
    title: "2025 / 2026 ሞዴሎች",
    description: "የቅርብ ጊዜ ሞዴሎችን ያገኛሉ",
    color: "from-purple-500 to-purple-600",
    bg: "from-purple-50 to-purple-100/50",
    border: "border-purple-200/60",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: FileCheck,
    title: "ሙሉ ህጋዊ ሰነዶች",
    description: "ሊብሬ እና ሙሉ ሰነዶች አብረው ይሰጣሉ",
    color: "from-amber-500 to-orange-500",
    bg: "from-amber-50 to-orange-100/50",
    border: "border-amber-200/60",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: Truck,
    title: "ፈጣን ማድረስ",
    description: "ፈጣን እና አስተማማኝ ማድረስ",
    color: "from-green-500 to-emerald-600",
    bg: "from-green-50 to-emerald-100/50",
    border: "border-green-200/60",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: DollarSign,
    title: "ተመጣጣኝ ዋጋ",
    description: "ምርጥ ዋጋ ከ 65,000 ብር ጀምሮ",
    color: "from-teal-500 to-cyan-600",
    bg: "from-teal-50 to-cyan-100/50",
    border: "border-teal-200/60",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    icon: Fuel,
    title: "ነዳጅ ቆጣቢ",
    description: "ዝቅተኛ ነዳጅ ፍጆታ",
    color: "from-orange-500 to-red-500",
    bg: "from-orange-50 to-red-100/50",
    border: "border-orange-200/60",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: Shield,
    title: "ከፍተኛ ጥራት",
    description: "አለም ደረጃ ጥራት ያላቸው ምርቶች",
    color: "from-indigo-500 to-blue-600",
    bg: "from-indigo-50 to-blue-100/50",
    border: "border-indigo-200/60",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    icon: Zap,
    title: "ፈጣን አገልግሎት",
    description: "ፈጣን እና ምቹ አገልግሎት",
    color: "from-yellow-500 to-amber-500",
    bg: "from-yellow-50 to-amber-100/50",
    border: "border-yellow-200/60",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      id="features"
      style={{
        background: "linear-gradient(135deg, #f8faff 0%, #eef4ff 50%, #f0fdf4 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full mb-5 shadow-lg shadow-blue-200">
            <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
            ለምን እኛን ይምረጡ?
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            ለምን <span className="text-blue-600">እኛን</span> ይምረጡ?
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            እኛ ምርጥ ሞተርሳይክሎችን ከምርጥ ዋጋ ጋር እናቀርባለን
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-green-500 rounded-full mx-auto mt-5" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`relative rounded-2xl p-6 bg-gradient-to-br ${feature.bg} border ${feature.border} shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group`}
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                />

                {/* Icon */}
                <div className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center mb-4 shadow-sm`}>
                  <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-snug">
                  ✔️ {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: "100%", label: "አዲስ ሞተርሳይክሎች" },
            { value: "2026", label: "የሞዴል ዓመት" },
            { value: "24/7", label: "ድጋፍ" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-blue-600 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
