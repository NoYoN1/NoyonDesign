// pages/services.tsx
import Layout from "../components/Layout";

export default function Services() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Үйлчилгээ</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Хэвлэл — баннер, стикер, нэрийн хуудас</li>
        <li>Гэрэлтдэг болон 3D хаяг</li>
        <li>Лого болон брэндингийн дизайн</li>
        <li>Сошиал пост, постер бэлтгэх</li>
      </ul>
    </Layout>
  );
}
