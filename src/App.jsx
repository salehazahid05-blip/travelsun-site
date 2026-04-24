import React, { useState } from "react";

const AGENCY_NAME = "Travelsun Ltd";
const PHONE_DISPLAY = "020 8163 6893";
const PHONE_CALL = "+442081636893";
const WHATSAPP = "442081636893";
const EMAIL = "info@travelsunltd.com";
const LOCATION = "United Kingdom";

function App() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });

  const mailLink = (subject, body = "") =>
    `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const sendFeedback = (e) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.msg}`;
    window.location.href = mailLink("Travel Website Feedback / Query", body);
  };

  const destinations = [
    {
      name: "Dubai",
      tag: "Luxury City Escape",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      desc: "Modern skyline, desert safari, premium shopping, beaches, and family-friendly attractions.",
    },
    {
      name: "Turkey",
      tag: "Culture & History",
      img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
      desc: "A beautiful mix of Ottoman history, bazaars, coastal views, food, and memorable city tours.",
    },
    {
      name: "Maldives",
      tag: "Beach Paradise",
      img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
      desc: "Crystal-clear water, overwater villas, peaceful beaches, and romantic tropical escapes.",
    },
    {
      name: "Switzerland",
      tag: "Mountain Luxury",
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
      desc: "Alpine landscapes, scenic trains, luxury resorts, lakes, and unforgettable mountain views.",
    },
    {
      name: "Paris",
      tag: "Romantic City Break",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
      desc: "Iconic landmarks, elegant hotels, museums, fine dining, and timeless European charm.",
    },
    {
      name: "Bali",
      tag: "Island Retreat",
      img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      desc: "Tropical beaches, rice terraces, private villas, waterfalls, and relaxing island experiences.",
    },
  ];

  const packages = [
    {
      title: "Family Holiday Package",
      days: "7 Days",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      desc: "A comfortable family-focused travel plan with hotels, transfers, activities, and sightseeing support.",
      includes: ["Hotel stay", "Airport transfer", "Family activities", "Travel guidance"],
    },
    {
      title: "Honeymoon Escape",
      days: "5 Days",
      img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80",
      desc: "A romantic and relaxing package designed for couples looking for comfort, privacy, and beauty.",
      includes: ["Romantic stay", "Private planning", "Premium locations", "Special experiences"],
    },
    {
      title: "Group Tour Plan",
      days: "Flexible",
      img: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=1200&q=80",
      desc: "Custom group travel planning for friends, families, business groups, and guided tours.",
      includes: ["Flexible itinerary", "Group rates", "Transport support", "Custom planning"],
    },
  ];

  return (
    <main>
      <nav className="nav">
        <a href="#home" className="logo">
          <span>TS</span>
          <b>{AGENCY_NAME}</b>
        </a>

        <div className="links">
          <a href="#home">Home</a>
          <a href="#destinations">Destinations</a>
          <a href="#packages">Packages</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="navBtn" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </nav>

      <aside className="sideNav">
        <a href="#home">Home</a>
        <a href="#destinations">Trips</a>
        <a href="#packages">Plans</a>
        <a href="#contact">Call</a>
      </aside>

      <section id="home" className="hero">
        <div className="heroBox">
          <p className="label">UK Based Travel Agency</p>
          <h1>Sunshine Holidays, Beautiful Memories</h1>
          <p>
            Discover family holidays, romantic escapes, luxury city breaks, and
            unforgettable beach getaways with Travelsun Ltd.
          </p>

          <div className="heroHighlights">
            <span>🌴 Beach Escapes</span>
            <span>🏙️ City Breaks</span>
            <span>💑 Honeymoon Trips</span>
            <span>👨‍👩‍👧 Family Tours</span>
          </div>

          <div className="heroBtns">
            <a href="#destinations">Explore Destinations</a>
            <a href={mailLink("Booking Query for Travelsun Ltd")} className="lightBtn">
              Book by Email
            </a>
            <a href={`tel:${PHONE_CALL}`} className="outlineBtn">
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section id="destinations" className="section">
        <div className="heading">
          <p>Explore the world</p>
          <h2>Featured Destinations</h2>
          <span>Carefully selected places for luxury, family, romantic, and group travel.</span>
        </div>

        <div className="destinationGrid">
          {destinations.map((d) => (
            <article className="destinationCard" key={d.name}>
              <img src={d.img} alt={d.name} />
              <div>
                <small>{d.tag}</small>
                <h3>{d.name}</h3>
                <p>{d.desc}</p>
                <a href={mailLink(`Destination Query: ${d.name}`)}>Ask Details</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="packages" className="section packages">
        <div className="heading">
          <p>Travel plans</p>
          <h2>Packages Designed Around You</h2>
          <span>Every package can be customized according to dates, budget, destination, and travelers.</span>
        </div>

        <div className="packageGrid">
          {packages.map((p) => (
            <article className="packageCard" key={p.title}>
              <img src={p.img} alt={p.title} />
              <div className="packageBody">
                <span>{p.days}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>

                <ul>
                  {p.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <a href={mailLink(`Booking Request: ${p.title}`)}>Book Now by Email</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section about">
        <div>
          <p className="label colored">About Travelsun Ltd</p>
          <h2>Reliable travel support with a premium personal touch.</h2>
          <p>
            Travelsun Ltd is a UK-based travel agency focused on helping clients
            plan smooth, safe, and memorable holidays. Whether you need a family
            trip, honeymoon, city break, or group tour, we help you move from
            idea to itinerary with clear support.
          </p>
        </div>

        <div className="whyBox">
          <h3>Why choose us?</h3>
          <ul>
            <li>UK-based support and communication</li>
            <li>Custom packages for different budgets</li>
            <li>Family, honeymoon, group, and luxury trips</li>
            <li>Easy contact through phone, WhatsApp, or email</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="contactPanel">
          <p className="label colored">Contact</p>
          <h2>Speak to us about your next trip.</h2>
          <p>
            For quick support, call us or send a WhatsApp message. For detailed
            trip requirements, send feedback/query by email.
          </p>

          <div className="contactLinks">
            <a href={`tel:${PHONE_CALL}`}>📞 {PHONE_DISPLAY}</a>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">💬 WhatsApp Us</a>
            <a href={`mailto:${EMAIL}`}>✉️ {EMAIL}</a>
          </div>
        </div>

        <form className="feedbackForm" onSubmit={sendFeedback}>
          <h3>Send feedback / query to mail</h3>
          <input
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            rows="5"
            placeholder="Write your travel query or feedback..."
            value={form.msg}
            onChange={(e) => setForm({ ...form, msg: e.target.value })}
          />
          <button type="submit">Send to Email</button>
        </form>
      </section>

      <footer>
        <div>
          <h3>{AGENCY_NAME}</h3>
          <p>Premium travel planning based in the UK.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#destinations">Destinations</a>
          <a href="#packages">Packages</a>
          <a href="#contact">Contact</a>
        </div>

        <div>
          <h4>Contact</h4>
          <a href={`tel:${PHONE_CALL}`}>{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <p>📍 Based in {LOCATION}</p>
        </div>

        <p className="copy">© {new Date().getFullYear()} Travelsun Ltd. All rights reserved.</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:wght@700&display=swap');

        * {
          box-sizing: border-box;
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: "Manrope", sans-serif;
          background: #f7f4ee;
          color: #18212f;
        }

        a {
          text-decoration: none;
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          height: 78px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 7%;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(15, 23, 42, 0.08);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #12343b;
          font-size: 18px;
        }

        .logo span {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: white;
          font-weight: 900;
          background: linear-gradient(135deg, #0f766e, #f59e0b);
        }

        .links {
          display: flex;
          gap: 28px;
        }

        .links a {
          color: #334155;
          font-weight: 800;
          font-size: 14px;
        }

        .links a:hover {
          color: #0f766e;
        }

        .navBtn,
        .heroBtns a,
        .packageCard a,
        .feedbackForm button {
          background: #0f766e;
          color: white;
          padding: 13px 20px;
          border-radius: 999px;
          font-weight: 900;
          border: none;
          cursor: pointer;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          transition: 0.25s ease;
        }

        .navBtn:hover,
        .heroBtns a:hover,
        .packageCard a:hover,
        .feedbackForm button:hover {
          transform: translateY(-3px);
          background: #115e59;
        }

        .sideNav {
          position: fixed;
          right: 18px;
          top: 40%;
          z-index: 40;
          display: grid;
          gap: 10px;
        }

        .sideNav a {
          background: rgba(255,255,255,0.9);
          color: #0f766e;
          border: 1px solid rgba(15,23,42,0.1);
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 900;
          box-shadow: 0 12px 30px rgba(15,23,42,0.08);
        }

        .hero {
          min-height: 760px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 90px 7%;
          text-align: center;
          background:
            linear-gradient(rgba(255, 244, 220, 0.12), rgba(15, 118, 110, 0.18)),
            url("https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1800&q=80")
            center/cover;
        }

        .heroBox {
          max-width: 980px;
          color: white;
          padding: 46px;
          border-radius: 34px;
          background: rgba(15, 23, 42, 0.34);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.22);
          box-shadow: 0 30px 80px rgba(0,0,0,0.25);
          animation: fadeUp 0.8s ease;
        }

        .heroHighlights {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 26px;
        }

        .heroHighlights span {
          background: rgba(255,255,255,0.18);
          border: 1px solid rgba(255,255,255,0.28);
          padding: 10px 14px;
          border-radius: 999px;
          color: white;
          font-size: 13px;
          font-weight: 800;
        }

        .label,
        .heading p {
          color: #f59e0b;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 900;
        }

        .colored {
          color: #0f766e;
        }

        h1,
        h2 {
          font-family: "Playfair Display", serif;
        }

        h1 {
          font-size: clamp(48px, 8vw, 90px);
          line-height: 0.95;
          margin: 16px 0;
          letter-spacing: -2px;
        }

        .heroBox p {
          max-width: 760px;
          margin: 0 auto;
          color: rgba(255,255,255,0.9);
          line-height: 1.8;
          font-size: 18px;
        }

        .heroBtns {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .heroBtns .lightBtn {
          background: #f59e0b;
        }

        .heroBtns .outlineBtn {
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.45);
        }

        .section {
          padding: 90px 7%;
        }

        .heading {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 42px;
        }

        .heading h2,
        .about h2,
        .contact h2 {
          margin: 8px 0;
          font-size: clamp(34px, 4vw, 54px);
          color: #12343b;
          letter-spacing: -1px;
        }

        .heading span,
        .about p,
        .contact p {
          color: #64748b;
          line-height: 1.8;
        }

        .destinationGrid,
        .packageGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }

        .destinationCard,
        .packageCard,
        .whyBox,
        .contactPanel,
        .feedbackForm {
          background: rgba(255,255,255,0.86);
          border: 1px solid rgba(15,23,42,0.08);
          border-radius: 30px;
          box-shadow: 0 24px 60px rgba(15,23,42,0.09);
          overflow: hidden;
        }

        .destinationCard,
        .packageCard {
          transition: 0.25s ease;
        }

        .destinationCard:hover,
        .packageCard:hover {
          transform: translateY(-8px);
        }

        .destinationCard img {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }

        .destinationCard div {
          padding: 24px;
        }

        .destinationCard small {
          color: #0f766e;
          font-weight: 900;
          text-transform: uppercase;
          font-size: 11px;
        }

        .destinationCard h3,
        .packageCard h3 {
          margin: 10px 0;
          font-size: 24px;
          color: #12343b;
        }

        .destinationCard p,
        .packageCard p {
          color: #64748b;
          line-height: 1.7;
          font-size: 14px;
        }

        .destinationCard a {
          color: #f59e0b;
          font-weight: 900;
        }

        .packages {
          background:
            radial-gradient(circle at top left, rgba(245,158,11,0.16), transparent 30%),
            #fffaf2;
        }

        .packageCard {
          display: flex;
          flex-direction: column;
          min-height: 100%;
        }

        .packageCard img {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .packageBody {
          padding: 24px;
          display: flex;
          flex: 1;
          flex-direction: column;
        }

        .packageBody span {
          color: #f59e0b;
          font-weight: 900;
        }

        .packageBody ul {
          color: #475569;
          line-height: 1.9;
          padding-left: 20px;
          margin-bottom: 24px;
        }

        .packageCard a {
          margin-top: auto;
          width: fit-content;
        }

        .about {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 30px;
          align-items: center;
        }

        .whyBox {
          padding: 30px;
        }

        .whyBox h3 {
          margin-top: 0;
          color: #12343b;
          font-size: 26px;
        }

        .whyBox ul {
          color: #475569;
          line-height: 2;
          padding-left: 20px;
        }

        .contact {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 30px;
          background: #eaf7f3;
        }

        .contactPanel,
        .feedbackForm {
          padding: 32px;
        }

        .contactLinks {
          display: grid;
          gap: 12px;
          margin-top: 24px;
        }

        .contactLinks a {
          padding: 15px 17px;
          border-radius: 18px;
          background: #ffffff;
          color: #0f766e;
          font-weight: 900;
          border: 1px solid rgba(15,23,42,0.08);
        }

        .feedbackForm h3 {
          margin-top: 0;
          color: #12343b;
          font-size: 24px;
        }

        .feedbackForm {
          display: grid;
          gap: 14px;
        }

        input,
        textarea {
          width: 100%;
          padding: 15px 17px;
          border-radius: 16px;
          border: 1px solid #d1d5db;
          outline: none;
          background: white;
          font-family: inherit;
        }

        input:focus,
        textarea:focus {
          border-color: #0f766e;
        }

        footer {
          position: relative;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 28px;
          padding: 50px 7% 80px;
          background: #102a2a;
          color: white;
        }

        footer h3,
        footer h4 {
          margin-top: 0;
        }

        footer p,
        footer a {
          color: rgba(255,255,255,0.72);
          display: block;
          margin: 8px 0;
        }

        .copy {
          position: absolute;
          bottom: 18px;
          left: 7%;
          right: 7%;
          border-top: 1px solid rgba(255,255,255,0.12);
          padding-top: 16px;
          text-align: center;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 950px) {
          .links {
            display: none;
          }

          .sideNav {
            display: none;
          }

          .destinationGrid,
          .packageGrid,
          .about,
          .contact,
          footer {
            grid-template-columns: 1fr;
          }

          .nav {
            padding: 0 18px;
          }

          .section {
            padding: 65px 20px;
          }

          .hero {
            min-height: 680px;
          }

          .navBtn {
            padding: 10px 14px;
            font-size: 13px;
          }
        }
      `}</style>
    </main>
  );
}

export default App;