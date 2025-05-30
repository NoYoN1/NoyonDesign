// pages/about.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Award, Users, Lightbulb } from "lucide-react"; // Header/Footer-т ашиглагддаггүй icon-ууд
import Layout from "../components/Layout";
// ===============================
// Utility Functions
// ===============================

const cn = (...args: any[]) => {
  return args.filter(Boolean).join(' ');
};

// ===============================
// Button Component
// ===============================
const Button = ({ children, variant, size, className, asChild, ...props }: any) => {
  const baseClasses = `
    inline-flex items-center justify-center
    px-4 py-2 rounded-md font-semibold
    transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
    ${size === "lg" ? "px-6 py-3 rounded-full" : "px-4 py-2 rounded-md"}
  `;

  const variantClasses: { [key: string]: string } = {
    default: "bg-white text-gray-900 hover:bg-gray-100",
    outline: "bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/50",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant] || 'bg-blue-500 text-white hover:bg-blue-600'} ${className}`;



  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default function About() {
  // Анимацийн variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.8, 0.3, 1],
      },
    },
  };

  const featureCards = [
    {
      icon: <Award className="w-8 h-8 text-blue-400" />,
      title: "Олон жилийн туршлага",
      description: "Хэвлэл, хаяг, рекламын салбарт 10 гаруй жилийн туршлагатай.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-purple-400" />,
      title: "Бүтээлч шийдэл",
      description: "Орчин үеийн чиг хандлагад нийцсэн шинэлэг, бүтээлч дизайныг санал болгоно.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Мэргэжлийн баг",
      description: "Өндөр ур чадвартай, туршлагатай мэргэжилтнүүдийн баг танд үйлчилнэ.",
    },
  ];

  return (
     <Layout>
    <div className="bg-gradient-to-br from-gray-900 via-blue-900/80 to-purple-900/80 text-white min-h-screen">
      {/* Hero Section for About Page */}
      <section className="relative overflow-hidden py-24 md:py-32 text-center">
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/90 z-0" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
          >
            Бидний тухай
          </motion.h1>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Манай компани нь хэвлэл, хаяг, рекламын салбарт олон жилийн туршлагатай бөгөөд чанартай үйлчилгээ, загварлаг гүйцэтгэлийг санал болгодог.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Бидний түүх ба үнэт зүйлс
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                2010 оноос хойш бид хэвлэл, хаяг, рекламын салбарт тасралтгүй үйл ажиллагаа явуулж, олон зуун үйлчлүүлэгчдийн итгэлийг хүлээсэн. Бидний гол зорилго бол үйлчлүүлэгчдийнхээ хэрэгцээ шаардлагад нийцсэн, чанартай, бүтээлч шийдлүүдийг санал болгох явдал юм.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Бидний баг нь салбартаа туршлагатай, шинэлэг сэтгэлгээтэй мэргэжилтнүүдээс бүрддэг. Хамтдаа бид таны брэндийг гэрэлтүүлэхэд туслах болно.
              </p>
              <motion.div variants={itemVariants} className="mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white/30 hover:bg-white/20 text-white"
                >
                  <a href="/contact" className="relative z-10 flex items-center">
                  Бидэнтэй холбогдох
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featureCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-blue-500/30 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-6 text-white">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-gray-300 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
