// pages/contact.tsx
import Layout from "../components/Layout";
import { motion, } from "framer-motion";
export default function Contact() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white min-h-screen py-36 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Холбоо <span className="text-purple-400">барих</span>
          </motion.h2>
          <p className="text-lg text-gray-300">
            Бидэнтэй дараах байдлаар холбогдно уу.
          </p>
        </div>

          <ul className="space-y-4 text-lg">
            <li>📞 Утас: <strong>+976 8981-9988, 9102-0302</strong></li>
            <li>✉️ И-мэйл: <strong>bg_0830@yahoo.com</strong></li>
            <li>📍 Хаяг: Өмнөговь, Даланзадгад, EGG towr 1 давхар</li>
          <li>🔗 Facebook: <a href="https://www.facebook.com/noyonungu" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">facebook.com/noyonungu</a></li>
          </ul>

          <div className="mt-12">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.1455071225124!2d104.429529!3d43.5717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3627048af79a4025%3A0xeae859d245681e2c!2sNoyon%20Design%20Khevlel%20Khayag%20Reklam!5e0!3m2!1sen!2smn!4v1717071234567"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}
