// pages/contact.tsx
import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Холбоо барих</h2>
      <p className="mb-4">Та бидэнтэй дараах байдлаар холбогдоорой:</p>
      <ul className="space-y-2">
        <li>📞 Утас: <strong>+976-99112233</strong></li>
        <li>✉️ И-мэйл: <strong>info@printsign.mn</strong></li>
        <li>📍 Хаяг: Улаанбаатар хот, Баянгол дүүрэг</li>
      </ul>
    </Layout>
  );
}
