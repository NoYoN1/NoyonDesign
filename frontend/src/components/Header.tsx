// components/Header.tsx
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const cn = (...args: any[]) => args.filter(Boolean).join(" ");

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const logoImageUrl = "/images/nd.png";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        "bg-transparent",
        isScrolled && "bg-gray-900/90 backdrop-blur-md shadow-lg"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={logoImageUrl}
            alt="НоёнДизайн Лого"
            width={48}
            height={48}
            className="mr-2 rounded-full"
          />
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
            НОЁН ДИЗАЙН
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={cn(
                    "text-gray-300 hover:text-white transition-colors duration-200",
                    router.pathname === link.path && "text-white font-semibold"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-900 px-4 pb-4"
        >
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-2 text-base text-gray-300 hover:text-white transition-colors",
                    router.pathname === link.path && "text-white font-semibold"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
