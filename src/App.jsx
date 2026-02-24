import { useEffect, useState } from "react";
import { content } from "./data/content";
import { serviceDetails } from "./data/serviceDetails";
import BackgroundVideo from "./components/BackgroundVideo";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Experts from "./components/Experts";
import Facilities from "./components/Facilities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServicePage from "./components/ServicePage";

const getPathname = () => {
  if (typeof window === "undefined") {
    return "/";
  }

  const pathname = window.location.pathname || "/";
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
};

function App() {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const savedLang = window.localStorage.getItem("hospital-lang");
    return savedLang && content[savedLang] ? savedLang : "en";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("hospital-lang", lang);
    }
  }, [lang]);

  const t = content[lang];
  const pathname = getPathname();
  const isServicePage = pathname === "/services" || pathname.startsWith("/services/");
  const serviceSlug = pathname.startsWith("/services/")
    ? decodeURIComponent(pathname.split("/")[2] ?? "")
    : "";
  const activeService = serviceSlug ? serviceDetails[serviceSlug] : null;
  const nav = isServicePage
    ? t.nav.map((item) => ({ ...item, href: `/${item.href}` }))
    : t.nav;

  return (
    <div className="min-h-screen font-body text-slate-900">
      <BackgroundVideo />
      <div
        className="pointer-events-none fixed inset-0 grid-blend opacity-30"
        aria-hidden
      />

      <TopBar welcome={t.topbar.welcome} phone={t.topbar.phone} />
      <Header
        brand={t.brand}
        nav={nav}
        language={t.language}
        lang={lang}
        onLangChange={setLang}
        bookLabel={t.hero.primaryCta}
        bookHref={isServicePage ? "/#contact" : "#contact"}
      />

      {isServicePage ? (
        <main className="relative z-10 px-6 pb-20 pt-44 sm:px-10 lg:px-16">
          <ServicePage service={activeService} slug={serviceSlug} contact={t.contact} />
        </main>
      ) : (
        <>
          <Hero hero={t.hero} />

          <main className="relative z-10 px-6 pb-20 pt-12 sm:px-10 lg:px-16">
            <About about={t.about} />
            <Services services={t.services} />
            <Experts experts={t.experts} />
            <Facilities facilities={t.facilities} />
            <Contact contact={t.contact} />
          </main>
        </>
      )}

      <Footer footer={t.footer} />
    </div>
  );
}

export default App;
