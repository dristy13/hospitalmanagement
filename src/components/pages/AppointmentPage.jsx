import { useState } from "react";
import SectionTitle from "../site/SectionTitle";

const fallbackCopy = {
  label: "Appointment Booking",
  title: "Book your consultation in under two minutes.",
  text: "Choose department, doctor, date, and time. Confirmation appears instantly.",
  formTitle: "Online Appointment Form",
  confirmationTitle: "Instant Confirmation",
  confirmationText:
    "Once you submit, you receive immediate confirmation and our care team follows up for final scheduling.",
  confirmed: "Booking Confirmed",
  confirmedText: "Your booking reference is {token}.",
  pending: "Awaiting Submission",
  pendingText: "Submit the form to generate your booking reference instantly.",
  confirmButton: "Confirm Appointment",
  callDesk: "Call Appointment Desk",
  viewDoctors: "View Doctor Profiles",
  fields: {
    name: "Full Name",
    phone: "Mobile Number",
    email: "Email Address",
    department: "Department",
    doctor: "Doctor",
    date: "Preferred Date",
    time: "Preferred Time",
    selectDepartment: "Select Department",
    selectDoctor: "Select Doctor",
    selectTime: "Select Time",
  },
};

function AppointmentPage({ content, onNavigate, locale }) {
  const [confirmation, setConfirmation] = useState("");
  const copy = locale?.appointment ?? fallbackCopy;
  const confirmationText =
    copy.confirmedText?.replace("{token}", confirmation) ??
    `Your booking reference is ${confirmation}.`;

  const onSubmit = (event) => {
    event.preventDefault();
    const token = `SH-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmation(token);
    event.currentTarget.reset();
  };

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
        <div className="container split-panels booking-panels">
          <article className="panel">
            <h3>{copy.formTitle}</h3>
            <form className="booking-form" onSubmit={onSubmit}>
              <label>
                {copy.fields.name}
                <input type="text" name="name" required />
              </label>
              <label>
                {copy.fields.phone}
                <input type="tel" name="phone" required />
              </label>
              <label>
                {copy.fields.email}
                <input type="email" name="email" required />
              </label>
              <label>
                {copy.fields.department}
                <select name="department" required defaultValue="">
                  <option value="" disabled>
                    {copy.fields.selectDepartment}
                  </option>
                  {content.departments.map((department) => (
                    <option key={department.name} value={department.name}>
                      {department.name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                {copy.fields.doctor}
                <select name="doctor" required defaultValue="">
                  <option value="" disabled>
                    {copy.fields.selectDoctor}
                  </option>
                  {content.doctors.map((doctor) => (
                    <option key={doctor.name} value={doctor.name}>
                      {doctor.name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                {copy.fields.date}
                <input type="date" name="date" required />
              </label>
              <label>
                {copy.fields.time}
                <select name="time" required defaultValue="">
                  <option value="" disabled>
                    {copy.fields.selectTime}
                  </option>
                  {content.appointmentSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </label>
              <button type="submit" className="btn btn-primary full-width">
                {copy.confirmButton}
              </button>
            </form>
          </article>

          <article className="panel">
            <h3>{copy.confirmationTitle}</h3>
            <p>{copy.confirmationText}</p>
            <div className="confirmation-box">
              <strong>{confirmation ? copy.confirmed : copy.pending}</strong>
              <p>
                {confirmation
                  ? confirmationText
                  : copy.pendingText}
              </p>
            </div>
            <div className="helper-links">
              <a href={`tel:${content.contact.appointments.replace(/\s+/g, "")}`}>
                {copy.callDesk}: {content.contact.appointments}
              </a>
              <a
                href="/doctors"
                onClick={(event) => onNavigate("/doctors", event)}
              >
                {copy.viewDoctors}
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default AppointmentPage;
