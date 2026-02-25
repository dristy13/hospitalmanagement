import SectionTitle from "../site/SectionTitle";

const fallbackCopy = {
  label: "Departments",
  title: "Comprehensive departments for complete care under one roof.",
  text: "From prevention to critical care, every department works on a coordinated pathway.",
  ctaTitle: "Not sure which department to choose?",
  ctaText:
    "Our triage and front desk team can direct you to the right specialist in minutes.",
  ctaButton: "Get Department Guidance",
};

function DepartmentsPage({ content, onNavigate, locale }) {
  const copy = locale?.departments ?? fallbackCopy;

  return (
    <div className="page-wrap">
      <style>{`
        @media (max-width: 768px) {
          .department-list {
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
          <div className="department-list">
            {content.departments.map((department) => (
              <article key={department.name} className="department-row">
                <h3>{department.name}</h3>
                <p>{department.description}</p>
                <small>{department.support}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container cta-strip">
          <h2>{copy.ctaTitle}</h2>
          <p>{copy.ctaText}</p>
          <div className="cta-actions">
            <a
              href="/appointment"
              className="btn btn-primary"
              onClick={(event) => onNavigate("/appointment", event)}
            >
              {copy.ctaButton}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DepartmentsPage;
