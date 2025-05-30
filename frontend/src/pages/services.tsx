// pages/services.tsx
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const services = [
  "Хэвлэл — стикер, даавуу, хулдаас, өнгөмжлөл, нэрийн хуудас г.м",
  "Гэрэлтдэг болон 3D гадна дотор хаяг",
  "Жааз захиалга, загварын өргөн сонголт, ",
  "Мод модон бүтээгдэхүүн дээрхи сийлбэр",
  "Лазер зүсэлт 3D лазер зүсэлттэй самбар, бүтээгдэхүүн, "
];

export default function Services() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-gray-950 to-gray-900 text-white py-36 px-4 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Манай <span className="text-purple-400">үйлчилгээ</span>
          </motion.h2>
          <p className="text-lg text-gray-300">
            Бид таны бизнест хамгийн тохиромжтой, чанартай шийдлүүдийг санал болгодог.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 hover:border-purple-500 transition duration-300"
            >
              <CheckCircle className="w-6 h-6 text-purple-400 mr-3 shrink-0" />
              <span className="text-gray-200 text-lg">{item}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
