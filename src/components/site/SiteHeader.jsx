import { useState } from "react";
import logo from "../../assets/logo.png";

const cleanPhone = (value) => value.replace(/\s+/g, "");

function SiteHeader({ content, activePath, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const emergencyPhone = content.contact?.emergency ?? "";
  const emergencyHref = cleanPhone(emergencyPhone);

  return (
    <header className="site-header">
      <style>{`
        .site-header {
          padding: 10px 0;
        }
        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          z-index: 2000;
        }
        .bar {
          display: block;
          width: 25px;
          height: 3px;
          margin: 5px auto;
          background-color: #333;
          transition: all 0.3s ease-in-out;
          border-radius: 2px;
        }
        @media (max-width: 992px) {
          .site-header .nav-shell {
            justify-content: space-between;
            padding: 5px 20px;
          }
          .menu-toggle { display: none; }
          .hamburger { display: block; }
          .hamburger.active .bar:nth-child(2) { opacity: 0; }
          .hamburger.active .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
          .hamburger.active .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
          
          .nav-links {
            position: fixed;
            left: -100%;
            top: 0;
            flex-direction: column;
            background-color: white;
            width: 100%;
            height: 100vh;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            padding-top: 100px;
            gap: 25px;
            display: flex;
            z-index: 1999;
          }
          .nav-links.is-open {
            left: 0;
          }
          .nav-links a {
            font-size: 1.2rem;
            display: block;
            padding: 10px;
          }
          .header-actions { display: none; }
          .nav-mobile-actions {
            display: flex;
            flex-direction: column;
            gap: 15px;
            align-items: center;
            margin-top: 20px;
          }
        }
      `}</style>
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
          <img
            src={logo}
            alt={content.brand.name}
            style={{ height: "70px", width: "auto", objectFit: "contain" }}
          />
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
          className={`hamburger ${menuOpen ? "active" : ""}`}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
}

export default SiteHeader;
