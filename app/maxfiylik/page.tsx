import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maxfiylik siyosati",
  description: "Gofurov Academy shaxsiy ma’lumotlarni qayta ishlash siyosati.",
  alternates: { canonical: "/maxfiylik" },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <article className="legal-card">
        <Link className="legal-back" href="/">← Bosh sahifaga qaytish</Link>
        <span className="kicker">Huquqiy ma’lumot</span>
        <h1>Maxfiylik siyosati</h1>
        <p className="legal-date">Oxirgi yangilanish: 10-avgust, 2026-yil</p>

        <h2>Qanday ma’lumotlarni olamiz?</h2>
        <p>Maslahat olish formasini yuborganingizda ismingiz va telefon raqamingizni olamiz.</p>

        <h2>Ma’lumotlar nima uchun ishlatiladi?</h2>
        <p>Ma’lumotlaringiz siz bilan bog‘lanish, kurslar haqida ma’lumot berish va arizangizni ko‘rib chiqish uchun ishlatiladi.</p>

        <h2>Ma’lumotlar qayerda saqlanadi?</h2>
        <p>Arizalar Google Sheets’da saqlanishi va mas’ul administratorga Telegram orqali yuborilishi mumkin. Ma’lumotlar reklama maqsadida uchinchi shaxslarga sotilmaydi.</p>

        <h2>Sizning huquqlaringiz</h2>
        <p>O‘z ma’lumotlaringizni aniqlashtirish yoki o‘chirishni so‘rashingiz mumkin. Buning uchun akademiya administratori bilan bog‘laning.</p>
      </article>
    </main>
  );
}
