import doctorOne from "../../assets/doctor-1.png";
import doctorTwo from "../../assets/doctor-2.png";
import SectionTitle from "../site/SectionTitle";

const doctorImages = [doctorOne, doctorTwo, doctorOne, doctorTwo];

const fallbackCopy = {
  label: "Our Doctors",
  title:
    "Experienced specialists with clear communication and patient-first decisions.",
  text: "Each doctor profile highlights specialization, experience focus, and consultation access.",
  consultLabel: "Book Consultation",
};

function DoctorsPage({ content, onNavigate, locale }) {
  const copy = locale?.doctors ?? fallbackCopy;

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
          .doctor-list {
            display: grid;
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .doctor-row {
            flex-direction: column;
            text-align: center;
          }
          .doctor-row img {
            margin: 0 auto 20px;
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
          <div className="doctor-list">
            {content.doctors.map((doctor, index) => (
              <article key={doctor.name} className="doctor-row">
                <img
                  src={doctorImages[index % doctorImages.length]}
                  alt={doctor.name}
                />
                <div>
                  <h3>{doctor.name}</h3>
                  <p className="doctor-role">{doctor.role}</p>
                  <p>{doctor.experience}</p>
                  <p>{doctor.achievement}</p>
                  <a
                    href="/appointment"
                    className="btn btn-outline"
                    onClick={(event) => onNavigate("/appointment", event)}
                  >
                    {copy.consultLabel}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default DoctorsPage;
