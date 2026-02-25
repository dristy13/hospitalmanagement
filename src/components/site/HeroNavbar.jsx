import { useState } from "react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Doctors", path: "/doctors" },
  { label: "Departments", path: "/departments" },
  { label: "Services", path: "/services" },
  { label: "Facilities", path: "/facilities" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

function HeroNavbar({ onNavigate, activePath, lang, onLangChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (path, event) => {
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(path, event);
    }
  };

  return (
    <nav className="hero-navbar">
      <style>{`
        .hero-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          position: relative;
          z-index: 1000;
        }
        .brand {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0f172a;
          text-decoration: none;
          z-index: 1001;
        }
        .nav-menu {
          display: flex;
          gap: 20px;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-item a {
          text-decoration: none;
          color: #334155;
          font-weight: 500;
          transition: color 0.2s;
          font-size: 0.95rem;
        }
        .nav-item a:hover, .nav-item a.active {
          color: #2563eb;
        }
        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          z-index: 1001;
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
          .hamburger {
            display: block;
          }
          .hamburger.active .bar:nth-child(2) {
            opacity: 0;
          }
          .hamburger.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
          }
          .hamburger.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
          }
          .nav-menu {
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
          }
          .nav-menu.active {
            left: 0;
          }
          .nav-item a {
            font-size: 1.2rem;
          }
        }
      `}</style>

      <a href="/" className="brand" onClick={(e) => handleNavigate("/", e)}>
        Shreejeevika
      </a>

      <button
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.path} className="nav-item">
            <a
              href={link.path}
              className={activePath === link.path ? "active" : ""}
              onClick={(e) => handleNavigate(link.path, e)}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li className="nav-item">
          <a
            href="/appointment"
            className="btn btn-primary"
            onClick={(e) => handleNavigate("/appointment", e)}
          >
            Book Appointment
          </a>
        </li>
        {onLangChange && (
          <li className="nav-item">
            <button
              className="btn btn-outline"
              style={{ padding: "5px 10px" }}
              onClick={() => onLangChange(lang === "en" ? "hi" : "en")}
            >
              {lang === "en" ? "HI" : "EN"}
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default HeroNavbar;
