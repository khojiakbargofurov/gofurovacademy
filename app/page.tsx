"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

function formatUzbekPhone(value: string) {
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("998")) digits = digits.slice(3);
  digits = digits.slice(0, 9);

  const parts = [digits.slice(0, 2), digits.slice(2, 5), digits.slice(5, 7), digits.slice(7, 9)].filter(Boolean);
  return `+998${parts.length ? ` ${parts.join(" ")}` : ""}`;
}

const courses = [
  { n: "01", title: "Frontend", text: "HTML, CSS, JavaScript va React orqali zamonaviy interfeyslar yarating.", duration: "6 oy", schedule: "Du–Cho–Ju · 18:30", teacher: "Javohir Karimov", price: "890 000 so‘m/oy", tools: ["HTML & CSS", "JavaScript", "React", "Git"], program: ["Web asoslari va responsiv sahifalar", "JavaScript va brauzer API’lari", "React komponentlari va state", "Portfolio uchun yakuniy loyiha"] },
  { n: "02", title: "Python", text: "Dasturlash asoslaridan real backend loyihalarigacha bo‘lgan amaliy yo‘l.", duration: "7 oy", schedule: "Se–Pay–Sha · 19:00", teacher: "Sardor Aliyev", price: "950 000 so‘m/oy", tools: ["Python", "Django", "PostgreSQL", "REST API"], program: ["Algoritmlar va Python asoslari", "Ma’lumotlar bazasi va SQL", "Django orqali backend yaratish", "REST API va serverga joylash"] },
  { n: "03", title: "Grafik dizayn", text: "Vizual fikrlash, brending va portfolio uchun kuchli dizayn ko‘nikmalari.", duration: "5 oy", schedule: "Du–Cho–Ju · 15:00", teacher: "Madina Rasulova", price: "790 000 so‘m/oy", tools: ["Figma", "Photoshop", "Illustrator", "Branding"], program: ["Kompozitsiya, rang va tipografika", "Ijtimoiy tarmoq dizayni", "Logotip va brend identifikatsiyasi", "Portfolio va mijoz bilan ishlash"] },
];

const studentResults = [
  { initials: "AS", name: "Azizbek S.", course: "Frontend", result: "Junior Frontend Developer", company: "Uzum", color: "coral" },
  { initials: "MN", name: "Mohinur N.", course: "Grafik dizayn", result: "Brand Designer", company: "Freelance", color: "lime" },
  { initials: "BK", name: "Bekzod K.", course: "Python", result: "Backend intern", company: "Payme", color: "green" },
];

const faqs = [
  ["Boshlash uchun tajriba kerakmi?", "Yo‘q. Darslar noldan boshlanadi va bosqichma-bosqich murakkablashadi."],
  ["Darslar qaysi tilda?", "Darslar o‘zbek tilida, zarur texnik atamalar esa sodda izohlanadi."],
  ["Sertifikat beriladimi?", "Ha, kursni muvaffaqiyatli yakunlagan o‘quvchilar sertifikat va tayyor portfolio oladi."],
  ["To‘lovni bo‘lib amalga oshirish mumkinmi?", "Ha, kurs to‘lovi har oy amalga oshiriladi. Bir necha oy uchun oldindan to‘lash ham mumkin."],
  ["Guruhda nechta o‘quvchi bo‘ladi?", "Sifatli mentorlik uchun guruhlar odatda 12–16 nafar o‘quvchidan tashkil qilinadi."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [programCourse, setProgramCourse] = useState<(typeof courses)[number] | null>(null);

  function chooseCourse(course: string) {
    setSelectedCourse(course);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setFormError("");
    const form = new FormData(e.currentTarget);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.get("name"), phone: form.get("phone"), course: form.get("course") }),
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
          <a href="https://t.me/gofurovacademy" target="_blank" rel="noreferrer">Telegram</a>
          <a href="https://instagram.com/gofurovacademy" target="_blank" rel="noreferrer">Instagram</a>
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
            <div className="course-top"><span>{course.n}</span><button type="button" onClick={() => chooseCourse(course.title)} aria-label={`${course.title} kursiga yozilish`}>↗</button></div>
            <div className="course-icon" aria-hidden="true">{i === 0 ? "</>" : i === 1 ? "Py" : "✦"}</div>
            <h3>{course.title}</h3><p>{course.text}</p>
            <dl className="course-details"><div><dt>Davomiyligi</dt><dd>{course.duration}</dd></div><div><dt>Dars vaqti</dt><dd>{course.schedule}</dd></div><div><dt>O‘qituvchi</dt><dd>{course.teacher}</dd></div></dl>
            <button className="program-button" type="button" onClick={() => setProgramCourse(course)}>Dastur bilan tanishish <span>→</span></button>
            <div className="course-meta"><strong>{course.price}</strong><button type="button" onClick={() => chooseCourse(course.title)}>Kursga yozilish</button></div>
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
        <div className="section-head results-head"><div><span className="kicker">Bitiruvchilar</span><h2>Bilimdan —<br /><em>real natijaga.</em></h2></div><p>Quyidagi ma’lumotlar hozircha namuna sifatida joylandi. Haqiqiy bitiruvchilar ma’lumotlari tayyor bo‘lganda yangilanadi.</p></div>
        <div className="result-grid">{studentResults.map((student) => <article className="result-card" key={student.name}><div className={`result-avatar ${student.color}`}>{student.initials}</div><span className="result-course">{student.course} bitiruvchisi</span><h3>{student.name}</h3><p>{student.result}</p><strong>{student.company}</strong><div className="result-actions"><span>Portfolio · tez orada</span><span>▶ Video fikr · tez orada</span></div></article>)}</div>
      </section>

      <section className="faq shell section">
        <div><span className="kicker">Savollarga javob</span><h2>Hammasi<br /><em>aniq.</em></h2></div>
        <div className="faq-list">{faqs.map((faq, i) => <div className="faq-item" key={faq[0]}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{faq[0]}</span><i>{openFaq === i ? "−" : "+"}</i></button>{openFaq === i && <p>{faq[1]}</p>}</div>)}</div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-grid">
          <div><span className="kicker light">Birinchi qadam</span><h2>Kelajagingizga<br /><em>joy band qiling.</em></h2><p>Raqamingizni qoldiring — administratorimiz kurs tanlashda bepul yordam beradi.</p></div>
          {sent ? <div className="success"><span>✓</span><h3>Arizangiz qabul qilindi!</h3><p>Tez orada siz bilan bog‘lanamiz.</p></div> : <form onSubmit={submit}><label>Ismingiz<input required name="name" autoComplete="name" placeholder="Ismingiz" maxLength={80} /></label><label>Qiziqtirgan kurs<select required name="course" value={selectedCourse} onChange={(event) => setSelectedCourse(event.target.value)}><option value="" disabled>Kursni tanlang</option>{courses.map((course) => <option key={course.title} value={course.title}>{course.title}</option>)}</select></label><label>Telefon raqamingiz<input required name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+998 90 123 45 67" value={phone} onFocus={() => !phone && setPhone("+998 ")} onChange={(event) => setPhone(formatUzbekPhone(event.target.value))} pattern="\+998 [0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}" title="Raqamni +998 90 123 45 67 formatida kiriting" /></label>{formError && <p className="form-error" role="alert">{formError}</p>}<button className="button lime" type="submit" disabled={sending}>{sending ? "Yuborilmoqda…" : "Bepul maslahat olish"} <span>→</span></button><small>Tugmani bosib, <Link href="/maxfiylik">shaxsiy ma’lumotlarni qayta ishlashga</Link> rozilik bildirasiz.</small></form>}
        </div>
      </section>

      <footer className="footer"><div className="shell footer-row"><div className="brand inverse"><span className="brand-mark">G</span><span>GOFUROV<br />ACADEMY</span></div><p>Bilimdan — natijaga.</p><div className="social-links"><a href="https://t.me/gofurovacademy" target="_blank" rel="noreferrer">Telegram ↗</a><a href="https://instagram.com/gofurovacademy" target="_blank" rel="noreferrer">Instagram ↗</a></div><span>© 2026</span></div></footer>

      <a className="mobile-cta" href="#contact">Bepul maslahat olish <span>→</span></a>

      {programCourse && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setProgramCourse(null)}><section className="program-modal" role="dialog" aria-modal="true" aria-labelledby="program-title"><button className="modal-close" type="button" onClick={() => setProgramCourse(null)} aria-label="Oynani yopish">×</button><span className="kicker">Kurs dasturi</span><h2 id="program-title">{programCourse.title}</h2><div className="tool-list">{programCourse.tools.map((tool) => <span key={tool}>{tool}</span>)}</div><ol>{programCourse.program.map((item, index) => <li key={item}><b>{String(index + 1).padStart(2, "0")}</b><span>{item}</span></li>)}</ol><button className="button primary" type="button" onClick={() => { setProgramCourse(null); chooseCourse(programCourse.title); }}>Kursga yozilish <span>→</span></button></section></div>}
    </main>
  );
}
