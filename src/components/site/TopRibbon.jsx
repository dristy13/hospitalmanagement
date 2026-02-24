const cleanPhone = (value) => value.replace(/\s+/g, "");

function TopRibbon({ content }) {
  return (
    <div className="top-ribbon">
      <div className="container top-ribbon-inner">
        <p className="ribbon-message">
          <span className="ribbon-pulse" aria-hidden />
          {content.topBar.message}
        </p>
        <a href={`tel:${cleanPhone(content.contact.emergency)}`}>
          Emergency: {content.contact.emergency}
        </a>
      </div>
    </div>
  );
}

export default TopRibbon;
