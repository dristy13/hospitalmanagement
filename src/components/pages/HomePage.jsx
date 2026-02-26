import { useEffect, useMemo, useState } from "react";
import SectionTitle from "../site/SectionTitle";
import doctorOne from "../../assets/doctor-1.png";
import doctorTwo from "../../assets/doctor-2.png";
import HeroNavbar from "../site/HeroNavbar";
import orthoImg from "../../assets/ortho.jpg";
import gynacImg from "../../assets/gynac.jpg";
import traumaImg from "../../assets/trauma.jpg";
import generalImg from "../../assets/about-hero.jpg";

const fallbackSlides = [
  {
    title: "The Best Medical Services",
    summary:
      "Trusted emergency and specialist care for families in Motihari. Consult experienced doctors, get clear guidance, and book appointments quickly.",
    ctaLabel: "Read More",
    ctaPath: "/about",
  },
  {
    title: "24/7 Emergency Response",
    summary:
      "Rapid triage support, dedicated ambulance coordination, and specialist escalation when every minute matters.",
    ctaLabel: "Emergency Contact",
    ctaPath: "/contact",
  },
  {
    title: "Specialist Care You Can Trust",
    summary:
      "From diagnostics to recovery, our coordinated teams deliver safe treatment pathways with transparent communication.",
    ctaLabel: "Book Appointment",
    ctaPath: "/appointment",
  },
];

const deptImages = [orthoImg, gynacImg, traumaImg, generalImg];

const fallbackHomeCopy = {
  specialties: {
    label: "Key Specialties",
    title: "Core departments patients trust us for every day.",
    text: "Specialized teams and coordinated care pathways help families get the right treatment without delay.",
    moreLabel: "Learn More",
  },
  stories: {
    label: "Patient Stories",
    title: "Reassuring care that families remember.",
    text: "Real feedback strengthens confidence before a patient even walks in.",
  },
  cta: {
    title: "Your Health, Our Priority",
    text: "Trusted by families across Motihari for emergency response, specialist consultations, and long-term recovery support.",
    primary: "Book Appointment",
    secondary: "Explore Services",
  },
};

function HomePage({ content, onNavigate, locale, lang, onLangChange }) {
  const slides = useMemo(
    () => (locale?.heroSlides?.length ? locale.heroSlides : fallbackSlides),
    [locale],
  );
  const copy = locale?.home ?? fallbackHomeCopy;
  const testimonial = content.testimonials?.[0];
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = slides.length || 1;

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, [totalSlides]);

  const activeSlide = slides[activeIndex] ?? slides[0];

  const featuredDoctors = content.doctors ? content.doctors.slice(0, 2) : [];
  const featuredBlogs = content.blogPosts ? content.blogPosts.slice(0, 3) : [];
  const usps = content.about?.usps || [];

  return (
    <div className="page-wrap">
      <style>{`
        @media (max-width: 768px) {
          .hero-reference-main {
            flex-direction: column;
            padding-top: 80px;
          }
          .hero-reference-copy {
            width: 100%;
            padding: 20px;
            text-align: center;
            position: relative;
            z-index: 2;
          }
          .hero-reference-visual, .hero-reference-steps {
            display: none;
          }
          .feature-list, .testimonial-rows {
            grid-template-columns: 1fr;
          }
          .cta-actions {
            flex-direction: column;
            gap: 10px;
          }
          .container { padding: 0 20px; }
          .feature-row { aspect-ratio: auto !important; min-height: auto !important; }
        }

        /* New Attractive Styles */
        .section { padding: 6rem 0; }
        .section:nth-of-type(odd) { background-color: #fff; }
        .section:nth-of-type(even) { background-color: #f8fafc; }

        .feature-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .feature-row {
          display: flex;
          flex-direction: column;
          padding: 0;
          background: #ffffff;
          border-radius: 1.5rem;
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.08);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid #f1f5f9;
          overflow: hidden;
        }
        .feature-row:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 60px -15px rgba(37, 99, 235, 0.2);
          border-color: #bfdbfe;
          z-index: 2;
        }
        .feature-row img {
            width: 100%;
            height: 240px;
            object-fit: cover;
        }
        .feature-row-content {
            padding: 2rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;
        }
        .feature-row h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #1e293b;
        }
        .feature-row p {
          color: #64748b;
          margin-bottom: 1.5rem;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .home-doctor-card {
            background: white;
            border-radius: 1rem;
            overflow: hidden;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
            text-align: center;
            padding-bottom: 1.5rem;
        }
        .home-doctor-card:hover { transform: translateY(-5px); }
        .home-doctor-card img { width: 100%; height: 260px; object-fit: cover; background: #f1f5f9; }
        .home-doctor-card h3 { margin-top: 1rem; color: #0f172a; }
        
        .home-blog-card {
            background: #fff;
            border-radius: 1rem;
            padding: 2rem;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
            border: 1px solid #f1f5f9;
            transition: border-color 0.3s;
            display: flex;
            flex-direction: column;
        }
        .home-blog-card:hover { border-color: #2563eb; }
        .home-blog-card a { margin-top: auto; font-weight: 600; color: #2563eb; text-decoration: none; }
        
        .section-title {
            text-align: center;
            margin-bottom: 3rem;
        }
        .section-title p {
            color: #2563eb;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
        }
        .section-title h2 {
            font-size: 2.5rem;
            color: #0f172a;
            margin-bottom: 1rem;
        }
        .section-title span {
            color: #64748b;
            font-size: 1.125rem;
        }
      `}</style>
      <section className="hero-section hero-fullscreen reveal">
        <div className="hero-reference">
          <HeroNavbar
            content={content}
            onNavigate={onNavigate}
            activePath="/"
            locale={locale}
            lang={lang}
            onLangChange={onLangChange}
          />

          <div className="hero-reference-main">
            <div className="hero-reference-steps">
              {slides.map((slide, index) => (
                <button
                  key={`${slide.title}-${index}`}
                  type="button"
                  className={`hero-reference-step ${index === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  aria-current={index === activeIndex ? "true" : "false"}
                >
                  {`0${index + 1}`}
                </button>
              ))}
            </div>

            <div
              key={`${lang}-${activeIndex}`}
              className="hero-reference-copy hero-slide-content"
            >
              <h1>{activeSlide.title}</h1>
              <p>{activeSlide.summary}</p>
              <a
                href={activeSlide.ctaPath}
                className="btn btn-primary"
                onClick={(event) => onNavigate(activeSlide.ctaPath, event)}
              >
                {activeSlide.ctaLabel}
              </a>
              <div className="hero-reference-badges">
                {content.trustBadges.slice(0, 3).map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>
            </div>

            <div className="hero-reference-visual">
              <div className="hero-reference-ring ring-outer" aria-hidden />
              <div className="hero-reference-ring ring-inner" aria-hidden />
              <div className="hero-reference-surface" aria-hidden />
              <img
                src={doctorOne}
                alt="Doctor team discussing diagnostics"
                className="hero-reference-doctor doctor-one"
              />
              <img
                src={doctorTwo}
                alt="Doctor team discussing diagnostics"
                className="hero-reference-doctor doctor-two"
              />
              {testimonial ? (
                <article className="hero-reference-trust-card">
                  <p>{copy.stories.label}</p>
                  <h3>{testimonial.department}</h3>
                  <span>{`★★★★★ ${testimonial.name}`}</span>
                </article>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section reveal">
        <div className="container section-shell">
          <SectionTitle
            label="Why Choose Us"
            title="Excellence in Healthcare"
            text="We are committed to providing the best medical care."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              marginTop: "3rem",
            }}
          >
            {usps.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  padding: "2rem",
                  borderRadius: "1rem",
                  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
                  borderLeft: "5px solid #2563eb",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "0.5rem",
                    color: "#0f172a",
                  }}
                >
                  0{i + 1}. {item}
                </h3>
                <p style={{ color: "#64748b" }}>
                  Dedicated to your well-being with state-of-the-art facilities
                  and compassionate care.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container section-shell">
          <SectionTitle
            label={copy.specialties.label}
            title={copy.specialties.title}
            text={copy.specialties.text}
          />
          <div className="feature-list">
            {content.specialtiesPreview.map((specialty, index) => (
              <article key={specialty.title} className="feature-row">
                <img
                  src={deptImages[index % deptImages.length]}
                  alt={specialty.title}
                />
                <div className="feature-row-content">
                  <h3>{specialty.title}</h3>
                  <p>{specialty.description}</p>
                  <a
                    href="/departments"
                    onClick={(event) => onNavigate("/departments", event)}
                  >
                    {copy.specialties.moreLabel}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Preview Section */}
      <section className="section reveal">
        <div className="container section-shell">
          <SectionTitle
            label="Our Team"
            title="Meet Our Specialists"
            text="Expert doctors ready to serve you."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "2rem",
              marginTop: "3rem",
            }}
          >
            {featuredDoctors.map((doc, i) => (
              <div key={i} className="home-doctor-card">
                <img src={i % 2 === 0 ? doctorOne : doctorTwo} alt={doc.name} />
                <h3>{doc.name}</h3>
                <p style={{ color: "#64748b" }}>{doc.role}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a
              href="/doctors"
              className="btn btn-outline"
              onClick={(e) => onNavigate("/doctors", e)}
            >
              View All Doctors
            </a>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container section-shell">
          <SectionTitle
            label={copy.stories.label}
            title={copy.stories.title}
            text={copy.stories.text}
          />
          <div className="testimonial-rows">
            {content.testimonials.slice(0, 2).map((item) => (
              <article key={item.name} className="testimonial-row">
                <p>{item.quote}</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.department}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="section reveal">
        <div className="container section-shell">
          <SectionTitle
            label="Health Tips"
            title="Latest News & Resources"
            text="Stay informed with our latest articles."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              marginTop: "3rem",
            }}
          >
            {featuredBlogs.map((post, i) => (
              <div key={i} className="home-blog-card">
                <span
                  style={{
                    fontSize: "0.85rem",
                    color: "#94a3b8",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "0.5rem",
                  }}
                >
                  {post.category}
                </span>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    marginBottom: "0.75rem",
                    color: "#0f172a",
                  }}
                >
                  {post.title}
                </h3>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "0.95rem",
                    lineHeight: "1.5",
                    marginBottom: "1rem",
                  }}
                >
                  {post.excerpt}
                </p>
                <a href="/blog" onClick={(e) => onNavigate("/blog", e)}>
                  Read Article &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container cta-strip">
          <h2>{copy.cta.title}</h2>
          <p>{copy.cta.text}</p>
          <div className="cta-actions">
            <a
              href="/appointment"
              className="btn btn-primary"
              onClick={(event) => onNavigate("/appointment", event)}
            >
              {copy.cta.primary}
            </a>
            <a
              href="/services"
              className="btn btn-outline"
              onClick={(event) => onNavigate("/services", event)}
            >
              {copy.cta.secondary}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
