const fallbackCopy = {
  title: "Page not found",
  text: "The requested page is unavailable. Use the main navigation to continue.",
  button: "Back to Home",
};

function NotFoundPage({ onNavigate, locale }) {
  const copy = locale?.notFound ?? fallbackCopy;

  return (
    <div className="page-wrap">
      <section className="section page-hero">
        <div className="container cta-band">
          <h1>{copy.title}</h1>
          <p>{copy.text}</p>
          <div className="cta-actions">
            <a
              href="/"
              className="btn btn-primary"
              onClick={(event) => onNavigate("/", event)}
            >
              {copy.button}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFoundPage;
