import SectionTitle from "../site/SectionTitle";

const fallbackCopy = {
  label: "Services",
  title: "Critical and routine services designed around speed, safety, and clarity.",
  text: "Our service model keeps emergency access and specialist support available whenever needed.",
  consultLabel: "Consult Now",
};

function ServicesPage({ content, onNavigate, locale }) {
  const copy = locale?.services ?? fallbackCopy;

  return (
    <div className="page-wrap">
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
