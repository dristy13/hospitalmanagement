function Footer({ footer }) {
  const quickLinks = footer?.quickLinks ?? [];
  const specialities = footer?.specialities ?? [];
  const contact = footer?.contact ?? [];
  return (
    <footer className="mt-20 bg-slate-900 px-6 py-12 text-sm text-white/70 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.6fr_0.6fr_0.8fr]">
        <div className="space-y-4">
          <p className="font-display text-lg text-white">
            Shree Jeevak Hospital
          </p>
          <p className="text-sm text-white/70">{footer?.about}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Quick Links</p>
          <div className="mt-3 space-y-2">
            {quickLinks.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Specialities</p>
          <div className="mt-3 space-y-2">
            {specialities.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <div className="mt-3 space-y-2">
            {contact.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/15 pt-6 text-xs text-white/60">
        {footer?.copy}
      </div>
    </footer>
  );
}

export default Footer;
