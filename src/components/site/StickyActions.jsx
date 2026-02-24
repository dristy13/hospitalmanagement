const cleanPhone = (value) => value.replace(/\s+/g, "");

function StickyActions({ content, onNavigate }) {
  return (
    <div className="sticky-actions">
      <a
        href="/appointment"
        className="btn btn-primary"
        onClick={(event) => onNavigate("/appointment", event)}
      >
        Book Appointment
      </a>
      <a href={`tel:${cleanPhone(content.contact.emergency)}`} className="btn btn-soft">
        Emergency Call
      </a>
    </div>
  );
}

export default StickyActions;
