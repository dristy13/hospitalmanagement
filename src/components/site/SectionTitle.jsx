function SectionTitle({ label, title, text }) {
  return (
    <header className="section-title">
      <p>{label}</p>
      <h2>{title}</h2>
      <div className="title-line" aria-hidden />
      <span>{text}</span>
    </header>
  );
}

export default SectionTitle;
