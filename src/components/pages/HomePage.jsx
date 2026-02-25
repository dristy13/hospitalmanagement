import { useEffect, useMemo, useState } from "react";
import SectionTitle from "../site/SectionTitle";
import doctorOne from "../../assets/doctor-1.png";
import doctorTwo from "../../assets/doctor-2.png";
import HeroNavbar from "../site/HeroNavbar";

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
  const emergencyLabel = locale?.contact?.fields?.emergency ?? "24/7 Emergency";
  const emergencyHref = `tel:${content.contact.emergency.replace(/\s+/g, "")}`;
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
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .cta-actions {
            flex-direction: column;
            gap: 10px;
          }
          .container { padding: 0 20px; }
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
              <a href={emergencyHref} className="hero-reference-emergency">
                <strong>{emergencyLabel}</strong>
                <span>{content.contact.emergency}</span>
              </a>
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

      <section className="section reveal">
        <div className="container section-shell">
          <SectionTitle
            label={copy.specialties.label}
            title={copy.specialties.title}
            text={copy.specialties.text}
          />
          <div className="feature-list">
            {content.specialtiesPreview.map((specialty) => (
              <article key={specialty.title} className="feature-row">
                <h3>{specialty.title}</h3>
                <p>{specialty.description}</p>
                <a
                  href="/departments"
                  onClick={(event) => onNavigate("/departments", event)}
                >
                  {copy.specialties.moreLabel}
                </a>
              </article>
            ))}
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
