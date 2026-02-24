import doctorOne from "../../assets/doctor-1.png";
import doctorTwo from "../../assets/doctor-2.png";
import SectionTitle from "../site/SectionTitle";

const doctorImages = [doctorOne, doctorTwo, doctorOne, doctorTwo];

const fallbackCopy = {
  label: "Our Doctors",
  title: "Experienced specialists with clear communication and patient-first decisions.",
  text: "Each doctor profile highlights specialization, experience focus, and consultation access.",
  consultLabel: "Book Consultation",
};

function DoctorsPage({ content, onNavigate, locale }) {
  const copy = locale?.doctors ?? fallbackCopy;

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
          <div className="doctor-list">
          {content.doctors.map((doctor, index) => (
            <article key={doctor.name} className="doctor-row">
              <img src={doctorImages[index % doctorImages.length]} alt={doctor.name} />
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
