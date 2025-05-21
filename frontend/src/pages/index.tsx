import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { Rocket, ChevronRight, Palette, Printer, Activity, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";

const bannerImageUrl = "/images/noyondesign.png";

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 1, 
      ease: [0.2, 0.8, 0.3, 1],
    },
  },
};

export default function Home() {
  const services = [
    { 
      icon: <Printer className="w-6 h-6" />, 
      name: "Хэвлэл", 
      description: "Өндөр чанарын хэвлэлийн бүтээгдэхүүн, фото, хулдаас, стикр, даавуу",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: <Palette className="w-6 h-6" />, 
      name: "Дизайн", 
      description: "Хаягны дизайн, 3D самбарын загвар, жаазан бүтээгдэхүүн",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: <Activity className="w-6 h-6" />, 
      name: "3D Хаяг & Лазер", 
      description: "Гадна дотор хаяг, жааз, лазер зүсэлт, модон сийлбэр, метал хийц",
      color: "from-amber-500 to-orange-500"
    },
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-br from-gray-900 via-blue-900/80 to-purple-900/80 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-6 md:py-12">


          <div className="absolute inset-0 bg-black/40 z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/90 z-0" />
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10 py-24">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center max-w-5xl mx-auto"
            >
              

              <motion.h1
                variants={titleVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
                  Өнгө дизайн
                </span>
                <br />
                <span className="text-white">өөдрөг амьралыг тань </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
                гэрэлтүүлэг
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10"
              >
                Бид таны бизнесийн үнэ цэнийг илэрхийлэх өвөрмөц дизайн, чанартай бүх төрлийн хулдаас стикр даавуун хэвлэл, 3D хаяг, модон сийлбэр, лазер зүсэлт, жааз захиалга зэрэг иж бүрэн шийдлүүдийг санал болгодог.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
              >
                {/* Primary Service Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Button
                    className={cn(
                      "bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 text-white font-semibold",
                      "px-8 py-4 rounded-full shadow-2xl hover:shadow-xl",
                      "hover:from-purple-600 hover:via-blue-600 hover:to-indigo-700 transition-all duration-300",
                      "flex items-center gap-3 text-lg relative overflow-hidden",
                      "before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
                      "after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:to-black/20 after:opacity-0 hover:after:opacity-50 after:transition-opacity after:duration-300",
                      "group"
                    )}
                  >
                    <a href="/services" className="relative z-10 flex items-center">
                      Үйлчилгээг үзэх
                      <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </motion.div>

                {/* Secondary Contact Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Button
                    className={cn(
                      "backdrop-blur-md bg-white/5 border border-white/20 text-white font-medium",
                      "px-8 py-4 rounded-full hover:bg-white/15 hover:border-white/40",
                      "transition-all duration-300 hover:shadow-lg",
                      "flex items-center gap-3 text-lg relative group",
                      "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-50 before:transition-opacity before:duration-300",
                      "after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:to-black/10 after:opacity-0 hover:after:opacity-30 after:transition-opacity after:duration-300"
                    )}
                  >
                    <a href="/contact" className="relative z-10 flex items-center">
                      Холбогдох
                      <Rocket className="w-6 h-6 ml-2 group-hover:animate-bounce" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900/50 via-gray-900 to-gray-950">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Бидний <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-400">үйлчилгээнүүд</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Таны бизнесийн хэрэгцээнд тохирсон бүх төрлийн шийдлүүд
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br ${service.color} rounded-2xl p-0.5 shadow-xl hover:shadow-2xl transition-shadow duration-300`}
                >
                  <div className="bg-gray-900/90 backdrop-blur-sm rounded-[calc(1rem-2px)] h-full p-6 flex flex-col">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 text-white`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-6 flex-grow">{service.description}</p>
                    <a
                      href={`/services#${service.name.toLowerCase().replace(/ /g, '-')}`}
                      className="inline-flex items-center text-white hover:text-gray-200 font-medium group"
                    >
                      Дэлгэрэнгүй
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Banner Section */}
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl relative group"
            >
              <img
                src={bannerImageUrl}
                alt="Бидний ажлын орчин"
                className="w-full h-auto object-cover aspect-[16/9] group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent flex items-end p-8 sm:p-12">
                <div className="max-w-2xl">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl font-bold text-white mb-3"
                  >
                    Брэндээ гэрэлтүүлэх мэргэжлийн шийдэл
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-gray-300"
                  >
                    Орчин үеийн тоног төхөөрөмж, мэргэшсэн баг, бүтээлч сэтгэлгээгээр таны төслүүдэд амь оруулдаг.
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}