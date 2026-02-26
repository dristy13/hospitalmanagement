import aboutHero from "../../assets/about-hero.jpg";
import SectionTitle from "../site/SectionTitle";

const fallbackCopy = {
  kicker: "About Shree Jeevak Hospital",
  title: "A mission-driven hospital built on trust, speed, and empathy.",
  summary:
    "Our care model combines emergency readiness, skilled specialists, and clear communication so patients and families feel confident at every stage.",
  primaryCta: "Book Appointment",
  secondaryCta: "Emergency Contact",
  missionLabel: "Mission",
  visionLabel: "Vision",
  valuesLabel: "Our Values",
  valuesTitle: "How we deliver patient-first care every day.",
  valuesText:
    "These operating values define our medical and service decisions.",
  whyChoose: "Why Choose Us",
  certifications: "Awards & Certifications",
  ctaTitle: "Need guidance before your first visit?",
  ctaText:
    "Our patient support team is available 24/7 to help you choose the right specialist.",
  ctaButton: "Contact Care Desk",
};

function AboutPage({ content, onNavigate, locale }) {
  const copy = locale?.aboutPage ?? fallbackCopy;

  return (
    <div className="page-wrap about-page">
      <style>{`
        .page-hero {
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            padding: 6rem 0 4rem;
            border-radius: 0 0 3rem 3rem;
            margin-bottom: 3rem;
        }
        @media (max-width: 768px) {
          .about-hero-shell {
            flex-direction: column;
          }
          .about-hero-copy, .about-hero-media {
            width: 100%;
            text-align: center;
          }
          .about-hero-actions {
            justify-content: center;
          }
          .about-mission-grid, .about-values-grid, .about-columns {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .container { padding: 0 20px; }
        }
      `}</style>
      <section className="section page-hero reveal">
        <div className="container about-hero-shell">
          <div className="about-hero-copy">
            <p className="eyebrow">{copy.kicker}</p>
            <h1>{copy.title}</h1>
            <p>{copy.summary}</p>
            <div className="about-hero-actions">
              <a
                href="/appointment"
                className="btn btn-primary"
                onClick={(event) => onNavigate("/appointment", event)}
              >
                {copy.primaryCta}
              </a>
              <a
                href="/contact"
                className="btn btn-outline"
                onClick={(event) => onNavigate("/contact", event)}
              >
                {copy.secondaryCta}
              </a>
            </div>
          </div>

          <div className="about-hero-media">
            <img src={aboutHero} alt="Shree Jeevak Hospital care team" />
            <div className="about-hero-badge">{content.trustBadges[1]}</div>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container about-mission-grid">
          <article className="about-mission-card">
            <p>{copy.missionLabel}</p>
            <h3>{content.about.mission}</h3>
          </article>
          <article className="about-mission-card">
            <p>{copy.visionLabel}</p>
            <h3>{content.about.vision}</h3>
          </article>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <SectionTitle
            label={copy.valuesLabel}
            title={copy.valuesTitle}
            text={copy.valuesText}
          />
          <div className="about-values-grid">
            {content.about.values.map((value, index) => (
              <article key={value.title} className="about-value-card">
                <span>{`0${index + 1}`}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container about-columns">
          <article className="about-column">
            <h3>{copy.whyChoose}</h3>
            <ul>
              {content.about.usps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="about-column">
            <h3>{copy.certifications}</h3>
            <ul>
              {content.about.awards.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section reveal">
        <div className="container about-closing">
          <h2>{copy.ctaTitle}</h2>
          <p>{copy.ctaText}</p>
          <a
            href="/contact"
            className="btn btn-primary"
            onClick={(event) => onNavigate("/contact", event)}
          >
            {copy.ctaButton}
          </a>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
