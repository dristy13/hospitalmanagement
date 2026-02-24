function SiteFooter({ content, onNavigate, locale }) {
  const footerCopy = locale?.footer ?? {};
  const links = locale?.footerLinks?.length ? locale.footerLinks : content.navigation;
  const specialties = locale?.specialtiesPreview?.length
    ? locale.specialtiesPreview
    : content.specialtiesPreview;

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <h3>{content.brand.name}</h3>
          <p>{footerCopy.about ?? content.footer.about}</p>
        </section>
        <section>
          <h3>{footerCopy.quickLinks ?? "Quick Links"}</h3>
          <ul>
            {links.map((item) => (
              <li key={item.path}>
                <a href={item.path} onClick={(event) => onNavigate(item.path, event)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3>{footerCopy.specialties ?? "Specialties"}</h3>
          <ul>
            {specialties.map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3>{footerCopy.contact ?? "Contact"}</h3>
          <ul>
            <li>{content.contact.address}</li>
            <li>{content.contact.appointments}</li>
            <li>{content.contact.email}</li>
          </ul>
        </section>
      </div>
      <div className="container footer-copy">{footerCopy.copy ?? content.footer.copy}</div>
    </footer>
  );
}

export default SiteFooter;
