import { useState } from "react";

const cleanPhone = (value) => value.replace(/\s+/g, "");

function SiteHeader({ content, activePath, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const emergencyPhone = content.contact?.emergency ?? "";
  const emergencyHref = cleanPhone(emergencyPhone);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a
          href="/"
          className="brand"
          onClick={(event) => {
            setMenuOpen(false);
            onNavigate("/", event);
          }}
          aria-label={content.brand.name}
        >
          <span className="brand-badge">{content.brand.shortName}</span>
          <span>
            <strong>{content.brand.name}</strong>
            <small>{content.brand.tagline}</small>
          </span>
        </a>

        <div
          className={`nav-overlay ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(false)}
          aria-hidden={!menuOpen}
        />

        <nav
          id="main-navigation"
          className={`nav-links ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {content.navigation.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={activePath === item.path ? "active" : ""}
              onClick={(event) => {
                setMenuOpen(false);
                onNavigate(item.path, event);
              }}
            >
              {item.label}
            </a>
          ))}

          <div className="nav-mobile-actions">
            <a className="nav-emergency" href={`tel:${emergencyHref}`}>
              24/7 Emergency: {emergencyPhone}
            </a>
            <a
              href="/appointment"
              className="btn btn-primary"
              onClick={(event) => {
                setMenuOpen(false);
                onNavigate("/appointment", event);
              }}
            >
              Book Appointment
            </a>
          </div>
        </nav>

        <div className="header-actions">
          <a className="header-emergency" href={`tel:${emergencyHref}`}>
            <span>24/7 Emergency</span>
            <strong>{emergencyPhone}</strong>
          </a>
          <a
            href="/appointment"
            className="btn btn-primary desktop-book"
            onClick={(event) => {
              setMenuOpen(false);
              onNavigate("/appointment", event);
            }}
          >
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}

export default SiteHeader;
