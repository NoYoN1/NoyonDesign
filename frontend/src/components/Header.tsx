// components/Header.tsx
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
const logoImageUrl = "/images/nd.png";
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", name: "Нүүр" },
    { path: "/about", name: "Бидний тухай" },
    { path: "/services", name: "Үйлчилгээ" },
    { path: "/portfolio", name: "Ажлууд" },
    { path: "/contact", name: "Холбоо барих" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md py-2" : "bg-white/90 py-4"
      } backdrop-blur-sm`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          
           <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Link компонентийг стандарт <a> tag-аар сольсон */}
      <a href="/" className="flex items-center">
        {/* Image компонентийг стандарт <img> tag-аар сольсон */}
        <img
          src={logoImageUrl}
          alt="НоёнДизайн Лого"
          width={55} // Зургийн өргөн
          height={55} // Зургийн өндөр
          className="mr-2 rounded-full" // Текстээс зай авах, бөөрөнхий хэлбэртэй болгох
        />

        {/* Текст */}
        <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
          НОЁН ДИЗАЙН
        </span>
      </a>
    </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:flex items-center space-x-1"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative px-4 py-2 font-medium text-sm sm:text-base transition-colors ${
                  router.pathname === link.path
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-500"
                }`}
              >
                {link.name}
                {router.pathname === link.path && (
                  <motion.span
                    layoutId="activeLink"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-red-600"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-lg font-medium ${
                    router.pathname === link.path
                      ? "text-red-600 bg-red-50"
                      : "text-gray-700 hover:bg-gray-100"
                  } rounded-lg transition-colors`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}