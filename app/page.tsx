"use client";

import { FormEvent, useState } from "react";

const courses = [
  { n: "01", title: "Frontend", text: "HTML, CSS, JavaScript va React orqali zamonaviy interfeyslar yarating.", meta: "6 oy · 3 kun/hafta" },
  { n: "02", title: "Python", text: "Dasturlash asoslaridan real backend loyihalarigacha bo‘lgan amaliy yo‘l.", meta: "7 oy · 3 kun/hafta" },
  { n: "03", title: "Grafik dizayn", text: "Vizual fikrlash, brending va portfolio uchun kuchli dizayn ko‘nikmalari.", meta: "5 oy · 3 kun/hafta" },
];

const faqs = [
  ["Boshlash uchun tajriba kerakmi?", "Yo‘q. Darslar noldan boshlanadi va bosqichma-bosqich murakkablashadi."],
  ["Darslar qaysi tilda?", "Darslar o‘zbek tilida, zarur texnik atamalar esa sodda izohlanadi."],
  ["Sertifikat beriladimi?", "Ha, kursni muvaffaqiyatli yakunlagan o‘quvchilar sertifikat va tayyor portfolio oladi."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setFormError("");
    const form = new FormData(e.currentTarget);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.get("name"), phone: form.get("phone") }),
      });
      if (!response.ok) throw new Error("send failed");
      setSent(true);
    } catch {
      setFormError("Arizani yuborib bo‘lmadi. Iltimos, qayta urinib ko‘ring.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main>
      <header className="nav shell">
        <a href="#top" className="brand" aria-label="Gofurov Academy bosh sahifa">
          <span className="brand-mark">G</span><span>GOFUROV<br />ACADEMY</span>
        </a>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menyuni ochish" aria-expanded={menuOpen}>
          <span /><span />
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#courses" onClick={() => setMenuOpen(false)}>Kurslar</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Biz haqimizda</a>
          <a href="#results" onClick={() => setMenuOpen(false)}>Natijalar</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Bepul maslahat <span>↗</span></a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span>●</span> Yangi guruhlarga qabul ochiq</div>
          <h1>Kelajak kasbini<br /><em>bugun</em> boshlang.</h1>
          <p>Gofurov Academy — amaliyot, mentorlik va natijaga yo‘naltirilgan zamonaviy ta’lim maskani.</p>
          <div className="hero-actions">
            <a className="button primary" href="#courses">Kursni tanlash <span>→</span></a>
            <a className="text-link" href="#about"><span className="play">▶</span> Biz qanday o‘qitamiz?</a>
          </div>
        </div>
        <div className="hero-art" aria-label="Gofurov Academy o‘quv platformasi tasviri">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="code-window">
            <div className="dots"><i /><i /><i /></div>
            <p><b>01</b> <span>const</span> kelajak =</p>
            <p><b>02</b> &nbsp;bilim + amaliyot;</p>
            <p><b>03</b></p>
            <p><b>04</b> <span>start</span>(<i>“bugun”</i>);</p>
          </div>
          <div className="floating-card fc-one"><strong>95%</strong><span>amaliy darslar</span></div>
          <div className="floating-card fc-two"><span>MENTOR</span><strong>1:1</strong></div>
          <div className="spark s1">✦</div><div className="spark s2">✦</div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Asosiy natijalar">
        <div className="shell proof-grid">
          <div><strong>1,200+</strong><span>bitiruvchilar</span></div>
          <div><strong>4.9</strong><span>o‘rtacha baho</span></div>
          <div><strong>24/7</strong><span>platforma ochiq</span></div>
          <div className="partners"><span>Bitiruvchilarimiz ishlaydi:</span><b>Uzum</b><b>EPAM</b><b>Payme</b></div>
        </div>
      </section>

      <section className="section shell" id="courses">
        <div className="section-head">
          <div><span className="kicker">Yo‘nalishlar</span><h2>Talab yuqori bo‘lgan<br /><em>kasbni tanlang.</em></h2></div>
          <p>Har bir kurs real loyihalar, mentor yordami va ishga tayyor portfolio bilan yakunlanadi.</p>
        </div>
        <div className="course-grid">
          {courses.map((course, i) => <article className={`course c${i + 1}`} key={course.title}>
            <div className="course-top"><span>{course.n}</span><i>↗</i></div>
            <div className="course-icon" aria-hidden="true">{i === 0 ? "</>" : i === 1 ? "Py" : "✦"}</div>
            <h3>{course.title}</h3><p>{course.text}</p><div className="course-meta">{course.meta}</div>
          </article>)}
        </div>
      </section>

      <section className="method" id="about">
        <div className="shell method-grid">
          <div className="method-copy"><span className="kicker light">Bizning metod</span><h2>Faqat ko‘rmang.<br /><em>Yaratishni boshlang.</em></h2><p>Quruq nazariya o‘rniga har haftada real vazifa. Xato qilasiz, tahlil qilasiz va mentor bilan kuchliroq natijaga chiqasiz.</p><a href="#contact" className="button lime">Darsga yozilish <span>→</span></a></div>
          <div className="steps">
            <div><b>01</b><span><strong>O‘rganing</strong>Qisqa va tushunarli nazariya</span></div>
            <div><b>02</b><span><strong>Bajaring</strong>Real brieflar va amaliy vazifalar</span></div>
            <div><b>03</b><span><strong>O‘sib boring</strong>Mentor fikri va portfolio</span></div>
          </div>
        </div>
      </section>

      <section className="section shell results" id="results">
        <div className="quote-mark">“</div>
        <blockquote>Bu yerda men shunchaki kod yozishni emas, <em>muammoni yechishni</em> o‘rgandim.</blockquote>
        <div className="student"><div className="avatar">AS</div><span><strong>Azizbek S.</strong>Frontend kursi bitiruvchisi · Uzum</span></div>
      </section>

      <section className="faq shell section">
        <div><span className="kicker">Savollarga javob</span><h2>Hammasi<br /><em>aniq.</em></h2></div>
        <div className="faq-list">{faqs.map((faq, i) => <div className="faq-item" key={faq[0]}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{faq[0]}</span><i>{openFaq === i ? "−" : "+"}</i></button>{openFaq === i && <p>{faq[1]}</p>}</div>)}</div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-grid">
          <div><span className="kicker light">Birinchi qadam</span><h2>Kelajagingizga<br /><em>joy band qiling.</em></h2><p>Raqamingizni qoldiring — administratorimiz kurs tanlashda bepul yordam beradi.</p></div>
          {sent ? <div className="success"><span>✓</span><h3>Arizangiz qabul qilindi!</h3><p>Tez orada siz bilan bog‘lanamiz.</p></div> : <form onSubmit={submit}><label>Ismingiz<input required name="name" autoComplete="name" placeholder="Ismingiz" /></label><label>Telefon raqamingiz<input required name="phone" type="tel" autoComplete="tel" placeholder="+998 90 123 45 67" /></label>{formError && <p className="form-error" role="alert">{formError}</p>}<button className="button lime" type="submit" disabled={sending}>{sending ? "Yuborilmoqda…" : "Bepul maslahat olish"} <span>→</span></button><small>Tugmani bosib, shaxsiy ma’lumotlarni qayta ishlashga rozilik bildirasiz.</small></form>}
        </div>
      </section>

      <footer className="footer"><div className="shell footer-row"><div className="brand inverse"><span className="brand-mark">G</span><span>GOFUROV<br />ACADEMY</span></div><p>Bilimdan — natijaga.</p><span>© 2026</span></div></footer>
    </main>
  );
}
