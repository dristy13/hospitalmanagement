import SectionTitle from "../site/SectionTitle";
import orthoImg from "../../assets/ortho.jpg";
import gynacImg from "../../assets/gynac.jpg";
import traumaImg from "../../assets/trauma.jpg";
import generalImg from "../../assets/about-hero.jpg";

const fallbackCopy = {
  label: "Departments",
  title: "Comprehensive departments for complete care under one roof.",
  text: "From prevention to critical care, every department works on a coordinated pathway.",
  ctaTitle: "Not sure which department to choose?",
  ctaText:
    "Our triage and front desk team can direct you to the right specialist in minutes.",
  ctaButton: "Get Department Guidance",
};

const deptImages = [orthoImg, gynacImg, traumaImg, generalImg];

function DepartmentsPage({ content, onNavigate, locale }) {
  const copy = locale?.departments ?? fallbackCopy;

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
        .department-row {
            background: #fff;
            border-radius: 1.5rem;
            padding: 1.5rem;
            box-shadow: 0 4px 20px -5px rgba(0,0,0,0.1);
            border: 1px solid #f1f5f9;
            transition: transform 0.3s ease;
            display: flex;
            flex-direction: column;
        }
        .department-row:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .department-row img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 1rem;
          margin-bottom: 1.5rem;
        }
        .department-row h3 {
            font-size: 1.5rem;
            color: #0f172a;
            margin-bottom: 0.75rem;
        }
        .department-row p {
            color: #64748b;
            line-height: 1.6;
            margin-bottom: 1.5rem;
            flex-grow: 1;
        }
        .department-row small {
            display: block;
            padding-top: 1rem;
            border-top: 1px solid #f1f5f9;
            color: #94a3b8;
            font-weight: 600;
            font-size: 0.875rem;
        }
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
            {content.departments.map((department, index) => (
              <article key={department.name} className="department-row">
                <img
                  src={deptImages[index % deptImages.length]}
                  alt={department.name}
                />
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
