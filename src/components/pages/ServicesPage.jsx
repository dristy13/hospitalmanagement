import SectionTitle from "../site/SectionTitle";

const fallbackCopy = {
  label: "Services",
  title:
    "Critical and routine services designed around speed, safety, and clarity.",
  text: "Our service model keeps emergency access and specialist support available whenever needed.",
  consultLabel: "Consult Now",
};

function ServicesPage({ content, onNavigate, locale }) {
  const copy = locale?.services ?? fallbackCopy;

  return (
    <div className="page-wrap">
      <style>{`
        .page-hero {
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            padding: 6rem 0 4rem;
            border-radius: 0 0 3rem 3rem;
            margin-bottom: 3rem;
            text-align: center;
        }
        .page-hero h2 {
            font-size: 3rem;
            color: #0f172a;
            margin-bottom: 1rem;
            line-height: 1.2;
        }
        .page-hero p {
            color: #2563eb;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
        }
        .page-hero span {
            color: #475569;
            font-size: 1.125rem;
            line-height: 1.7;
            display: block;
            max-width: 600px;
            margin: 0 auto;
        }
        @media (max-width: 768px) {
          .service-list {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .container { padding: 0 20px; }
        }
      `}</style>
      <section className="section page-hero reveal">
        <div className="container section-shell">
          <SectionTitle
            label={copy.label}
            title={copy.title}
            text={copy.text}
          />
        </div>
      </section>

      <section className="section reveal">
        <div className="container section-shell">
          <div className="service-list">
            {content.services.map((service) => (
              <article key={service.title} className="service-row">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <a
                  href="/appointment"
                  className="btn btn-outline"
                  onClick={(event) => onNavigate("/appointment", event)}
                >
                  {copy.consultLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
