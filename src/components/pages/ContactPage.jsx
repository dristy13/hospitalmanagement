import SectionTitle from "../site/SectionTitle";

const cleanPhone = (value) => value.replace(/\s+/g, "");
const digitsOnly = (value) => value.replace(/\D/g, "");

const fallbackCopy = {
  label: "Contact & Emergency",
  title: "Reach our emergency, appointments, and support desk in one place.",
  text: "Call, message on WhatsApp, or send an inquiry. We respond quickly.",
  contactTitle: "Emergency & Hospital Contact",
  inquiryTitle: "Send an Inquiry",
  whatsapp: "WhatsApp Support",
  submit: "Submit Inquiry",
  mapTitle: "Shreejeevika Hospital Location",
  fields: {
    emergency: "24/7 Emergency",
    appointments: "Appointments",
    email: "Email",
    address: "Address",
    name: "Full Name",
    phone: "Mobile Number",
    subject: "Subject",
    message: "Message",
  },
};

function ContactPage({ content, locale }) {
  const copy = locale?.contact ?? fallbackCopy;
  const whatsappUrl = `https://wa.me/${digitsOnly(content.contact.whatsapp)}`;

  return (
    <div className="page-wrap">
      <style>{`
        @media (max-width: 768px) {
          .split-panels {
            flex-direction: column;
            gap: 30px;
          }
          .panel { width: 100%; }
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
        <div className="container split-panels contact-panels">
          <article className="panel">
            <h3>{copy.contactTitle}</h3>
            <div className="contact-list">
              <p>
                <strong>{copy.fields.emergency}:</strong>{" "}
                <a href={`tel:${cleanPhone(content.contact.emergency)}`}>
                  {content.contact.emergency}
                </a>
              </p>
              <p>
                <strong>{copy.fields.appointments}:</strong>{" "}
                <a href={`tel:${cleanPhone(content.contact.appointments)}`}>
                  {content.contact.appointments}
                </a>
              </p>
              <p>
                <strong>{copy.fields.email}:</strong>{" "}
                <a href={`mailto:${content.contact.email}`}>
                  {content.contact.email}
                </a>
              </p>
              <p>
                <strong>{copy.fields.address}:</strong>{" "}
                {content.contact.address}
              </p>
            </div>
            <a
              className="btn btn-primary full-width emergency-blue"
              href={whatsappUrl}
            >
              {copy.whatsapp}
            </a>
          </article>

          <article className="panel">
            <h3>{copy.inquiryTitle}</h3>
            <form
              className="booking-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <label>
                {copy.fields.name}
                <input type="text" name="name" required />
              </label>
              <label>
                {copy.fields.phone}
                <input type="tel" name="phone" required />
              </label>
              <label>
                {copy.fields.subject}
                <input type="text" name="subject" required />
              </label>
              <label>
                {copy.fields.message}
                <textarea rows="4" name="message" required />
              </label>
              <button type="submit" className="btn btn-primary full-width">
                {copy.submit}
              </button>
            </form>
          </article>
        </div>
      </section>

      <section className="section reveal">
        <div className="container map-panel">
          <iframe
            title={copy.mapTitle}
            loading="lazy"
            allowFullScreen
            src={content.contact.mapEmbed}
          />
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
