import { useState } from "react";

function Header({
  brand,
  nav,
  language,
  lang,
  onLangChange,
  bookLabel,
  bookHref = "#contact",
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-10 z-20 px-6 pt-6 sm:top-11 sm:px-10 lg:top-12 lg:px-16">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-blue-900/10 bg-white/90 px-4 py-3 shadow-sm backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/30">
            <span className="font-display text-xl">H</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blue-700/70">
              {brand.name}
            </p>
            <p className="font-display text-lg text-slate-900">{brand.sub}</p>
            <p className="text-xs text-slate-500">{brand.tagline}</p>
          </div>
        </div>

        <div className="hidden items-center gap-6 text-sm font-semibold text-slate-600 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-blue-700"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-blue-900/10 bg-blue-50 px-2 py-1 text-xs font-semibold text-slate-600 sm:flex">
            <span className="px-2">{language.label}</span>
            <button
              className={`rounded-full px-3 py-1 transition ${
                lang === "en"
                  ? "bg-blue-700 text-white"
                  : "text-slate-600 hover:text-blue-700"
              }`}
              onClick={() => onLangChange("en")}
              aria-pressed={lang === "en"}
            >
              {language.en}
            </button>
            <button
              className={`rounded-full px-3 py-1 transition ${
                lang === "hi"
                  ? "bg-blue-700 text-white"
                  : "text-slate-600 hover:text-blue-700"
              }`}
              onClick={() => onLangChange("hi")}
              aria-pressed={lang === "hi"}
            >
              {language.hi}
            </button>
          </div>
          <select
            className="rounded-full border border-blue-900/10 bg-white px-3 py-2 text-xs font-semibold text-slate-700 sm:hidden"
            value={lang}
            onChange={(event) => onLangChange(event.target.value)}
            aria-label={language.label}
          >
            <option value="en">{language.en}</option>
            <option value="hi">{language.hi}</option>
          </select>
          <a
            href={bookHref}
            className="rounded-full bg-blue-700 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-700/30 transition hover:-translate-y-0.5 hover:bg-blue-600"
          >
            {bookLabel}
          </a>
          <button
            className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition hover:bg-blue-100 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mt-4 rounded-3xl border border-blue-900/10 bg-white/95 p-4 shadow-xl backdrop-blur lg:hidden">
          <div className="flex flex-col gap-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
