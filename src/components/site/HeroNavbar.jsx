const fallbackNavItems = [
  { label: "Home", path: "/" },
  { label: "About us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "News", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

function HeroNavbar({
  content,
  onNavigate,
  activePath = "/",
  locale,
  lang = "en",
  onLangChange,
}) {
  const navItems = locale?.navItems?.length ? locale.navItems : fallbackNavItems;
  const language = locale?.language ?? { label: "Language", en: "EN", hi: "हिंदी" };

  return (
    <div className="hero-reference-nav">
      <a
        href="/"
        className="hero-reference-brand"
        onClick={(event) => onNavigate("/", event)}
      >
        <span className="hero-reference-brand-mark" aria-hidden>
          +
        </span>
        <span>
          <strong>Shreejeevika</strong>
          <small>Hospital</small>
        </span>
      </a>

      <nav className="hero-reference-links" aria-label="Hero navigation">
        {navItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className={activePath === item.path ? "active" : ""}
            onClick={(event) => onNavigate(item.path, event)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="hero-nav-actions">
        {onLangChange ? (
          <div className="hero-language-switch" role="group" aria-label={language.label}>
            <button
              type="button"
              className={`hero-language-btn ${lang === "en" ? "active" : ""}`}
              onClick={() => onLangChange("en")}
            >
              {language.en}
            </button>
            <button
              type="button"
              className={`hero-language-btn ${lang === "hi" ? "active" : ""}`}
              onClick={() => onLangChange("hi")}
            >
              {language.hi}
            </button>
          </div>
        ) : null}
        <a
          href={`tel:${content.contact.emergency.replace(/\s+/g, "")}`}
          className="hero-reference-call"
        >
          {content.contact.emergency}
        </a>
      </div>
    </div>
  );
}

export default HeroNavbar;
