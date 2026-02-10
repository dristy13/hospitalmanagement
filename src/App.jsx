import { useState } from "react";
import { content } from "./data/content";
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

function App() {
  const [lang, setLang] = useState("en");
  const t = content[lang];

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
        nav={t.nav}
        language={t.language}
        lang={lang}
        onLangChange={setLang}
        bookLabel={t.hero.primaryCta}
      />

      <Hero hero={t.hero} highlights={t.hero.highlights} />

      <main className="relative z-10 px-6 pb-20 pt-12 sm:px-10 lg:px-16">
        <About about={t.about} />
        <Services services={t.services} />
        <Experts experts={t.experts} />
        <Facilities facilities={t.facilities} />
        <Contact contact={t.contact} />
      </main>

      <Footer footer={t.footer} />
    </div>
  );
}

export default App;
