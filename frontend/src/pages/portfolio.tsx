// pages/portfolio.tsx
import Layout from "../components/Layout";
import { useState, } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

const cn = (...args: any[]) => args.filter(Boolean).join(" ");

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

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioImages = Array.from({ length: 71 }, (_, i) => ({
    src: `/images/work${i + 1}.jpg`,
    alt: `Project ${i + 1}`
  }));

  const shuffledImages = [...portfolioImages].sort(() => 0.5 - Math.random());

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "";
  };

  const showPrev = () => {
    const newIndex = (currentIndex - 1 + shuffledImages.length) % shuffledImages.length;
    setCurrentIndex(newIndex);
  };

  const showNext = () => {
    const newIndex = (currentIndex + 1) % shuffledImages.length;
    setCurrentIndex(newIndex);
  };

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      showPrev();
    } else if (e.deltaY > 0) {
      showNext();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2, ease: "easeIn" } },
  };

  return (
    <Layout>
      <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white min-h-screen">
        <section className="py-24 md:py-32 text-center">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl sm:text-5xl font-bold mb-4"
                >
                  Бидний <span className="text-purple-400">хийсэн ажлууд</span>
                </motion.h2>
                <p className="text-lg text-gray-300">Бидний бүтээлч сэтгэлгээ, ур чадварыг харуулсан шилдэг төслүүдтэй танилцана уу.</p>
              </div>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {shuffledImages.map((image, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="cursor-pointer overflow-hidden rounded-xl shadow-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 relative group aspect-[4/3]"
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Дэлгэрэнгүй харах
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <AnimatePresence>
          {showModal && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              onClick={closeModal}
              onWheel={handleScroll}
            >
              <motion.div
                className="relative max-w-4xl w-full rounded-lg shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <img
                  src={shuffledImages[currentIndex].src}
                  alt="Preview"
                  className="w-full h-auto object-contain max-h-[80vh]"
                />
                <button
                  className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 rounded-full p-2 transition-all duration-200 shadow-lg"
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full"
                  onClick={showPrev}
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full"
                  onClick={showNext}
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}
