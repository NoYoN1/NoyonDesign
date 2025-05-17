// components/Footer.tsx
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: "#", name: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, url: "#", name: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, url: "#", name: "Twitter" }
  ];

  const contactInfo = [
    { icon: <Phone className="w-5 h-5" />, text: "+(976) 9999-9999" },
    { icon: <Mail className="w-5 h-5" />, text: "info@printsign.mn" },
    { icon: <MapPin className="w-5 h-5" />, text: "Улаанбаатар хот, Сүхбаатар дүүрэг" }
  ];

  const quickLinks = [
    { name: "Нүүр", url: "/" },
    { name: "Үйлчилгээ", url: "/services" },
    { name: "Ажлын үр дүн", url: "/portfolio" },
    { name: "Бидний тухай", url: "/about" },
    { name: "Холбоо барих", url: "/contact" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">PrintSign</h3>
            <p className="text-gray-400">
              Хэвлэл, хаяг, рекламын бүх төрлийн үйлчилгээг чанартай, шуурхай хүргэх мэргэжлийн баг.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  aria-label={social.name}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Холбоос</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Холбоо барих</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-gray-400 mt-0.5">{item.icon}</span>
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Мэдээлэл хүлээн авах</h4>
            <p className="text-gray-400 mb-4">
              Шинээр нэмэгдсэн үйлчилгээ, хямдралын мэдээллүүдийг цаг алдалгүй авахыг хүсвэл:
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Имэйл хаяг"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-red-500 text-white"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors duration-300"
              >
                Бүртгүүлэх
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} PrintSign. Бүх эрх хуулиар хамгаалагдсан.
          </p>
        
        </div>
      </div>
    </footer>
  );
}