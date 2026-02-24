import { useEffect, useMemo, useState } from "react";
import BlogPage from "./components/pages/BlogPage";
import ContactPage from "./components/pages/ContactPage";
import AboutPage from "./components/pages/AboutPage";
import AppointmentPage from "./components/pages/AppointmentPage";
import DepartmentsPage from "./components/pages/DepartmentsPage";
import DoctorsPage from "./components/pages/DoctorsPage";
import FacilitiesPage from "./components/pages/FacilitiesPage";
import HomePage from "./components/pages/HomePage";
import NotFoundPage from "./components/pages/NotFoundPage";
import ServicesPage from "./components/pages/ServicesPage";
import TestimonialsPage from "./components/pages/TestimonialsPage";
import HeroNavbar from "./components/site/HeroNavbar";
import SiteFooter from "./components/site/SiteFooter";
import { siteContent } from "./data/siteContent";
import { translations } from "./data/translations";

const normalizePath = (rawPath) => {
  if (!rawPath) {
    return "/";
  }

  const [pathname] = rawPath.split("?");
  const normalized = pathname.replace(/\/+$/, "");
  return normalized || "/";
};

const routeMap = {
  "/": HomePage,
  "/about": AboutPage,
  "/doctors": DoctorsPage,
  "/departments": DepartmentsPage,
  "/services": ServicesPage,
  "/appointment": AppointmentPage,
  "/facilities": FacilitiesPage,
  "/testimonials": TestimonialsPage,
  "/blog": BlogPage,
  "/contact": ContactPage,
};

function App() {
  const [path, setPath] = useState(() => {
    if (typeof window === "undefined") {
      return "/";
    }

    return normalizePath(window.location.pathname);
  });
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") {
      return "hi";
    }

    const savedLang = window.localStorage.getItem("hospital-lang");
    return savedLang === "en" || savedLang === "hi" ? savedLang : "hi";
  });

  useEffect(() => {
    const onPopState = () => {
      setPath(normalizePath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("hospital-lang", lang);
    }
  }, [lang]);

  const pageMeta = useMemo(
    () => siteContent.navigation.find((item) => item.path === path),
    [path],
  );
  const locale = translations[lang] ?? translations.en;
  const resolvedContent = useMemo(() => {
    const aboutContent = locale?.aboutContent ?? {};

    return {
      ...siteContent,
      trustBadges: locale?.trustBadges ?? siteContent.trustBadges,
      specialtiesPreview: locale?.specialtiesPreview ?? siteContent.specialtiesPreview,
      about: {
        ...siteContent.about,
        mission: aboutContent.mission ?? siteContent.about.mission,
        vision: aboutContent.vision ?? siteContent.about.vision,
        values: aboutContent.values ?? siteContent.about.values,
        usps: aboutContent.usps ?? siteContent.about.usps,
        awards: aboutContent.awards ?? siteContent.about.awards,
      },
      doctors: locale?.doctorsList ?? siteContent.doctors,
      departments: locale?.departmentsList ?? siteContent.departments,
      services: locale?.servicesList ?? siteContent.services,
      facilities: locale?.facilitiesList ?? siteContent.facilities,
      testimonials: locale?.testimonialsList ?? siteContent.testimonials,
      videoStories: locale?.videoStories ?? siteContent.videoStories,
      blogPosts: locale?.blogPosts ?? siteContent.blogPosts,
      footer: {
        ...siteContent.footer,
        ...(locale?.footer ?? {}),
      },
    };
  }, [locale]);
  const localizedPageLabel =
    locale?.footerLinks?.find((item) => item.path === path)?.label ??
    locale?.navItems?.find((item) => item.path === path)?.label ??
    pageMeta?.label ??
    "Home";

  useEffect(() => {
    const activeMeta = pageMeta ?? siteContent.navigation[0];
    const localizedDescription = locale?.pageDescriptions?.[path] ?? activeMeta.description;
    document.title = `${localizedPageLabel} | ${resolvedContent.brand.name}`;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", localizedDescription);
    }
  }, [pageMeta, path, localizedPageLabel, locale, resolvedContent.brand.name]);

  const onNavigate = (to, event) => {
    if (event) {
      if (
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0
      ) {
        return;
      }

      event.preventDefault();
    }

    const nextPath = normalizePath(to);
    if (nextPath === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const ActivePage = routeMap[path] ?? NotFoundPage;
  const isHomePage = path === "/";

  return (
    <div className="site-shell">
      <div className="site-background" aria-hidden />
      {!isHomePage ? (
        <div className="hero-nav-global-wrap">
          <HeroNavbar
            content={resolvedContent}
            activePath={path}
            onNavigate={onNavigate}
            locale={locale}
            lang={lang}
            onLangChange={setLang}
          />
        </div>
      ) : null}
      <main className={`site-main ${isHomePage ? "site-main-home" : ""}`}>
        <ActivePage
          content={resolvedContent}
          onNavigate={onNavigate}
          locale={locale}
          lang={lang}
          onLangChange={setLang}
        />
      </main>
      <SiteFooter content={resolvedContent} locale={locale} onNavigate={onNavigate} />
    </div>
  );
}

export default App;
