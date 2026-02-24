import aboutHero from "../../assets/about-hero.jpg";
import gynacImage from "../../assets/gynac.jpg";
import orthoImage from "../../assets/ortho.jpg";
import traumaImage from "../../assets/trauma.jpg";
import SectionTitle from "../site/SectionTitle";

const galleryImages = [aboutHero, orthoImage, traumaImage, gynacImage];

const fallbackCopy = {
  label: "Facilities & Infrastructure",
  title: "Modern infrastructure designed for safety, speed, and comfort.",
  text: "From operation theatres to private recovery spaces, every area is designed around patient confidence.",
  imageAltPrefix: "Hospital facility view",
};

function FacilitiesPage({ content, locale }) {
  const copy = locale?.facilities ?? fallbackCopy;

  return (
    <div className="page-wrap">
      <section className="section page-hero reveal">
        <div className="container section-shell">
          <SectionTitle
            label={copy.label}
            title={copy.title}
            text={copy.text}
          />
        </div>
      </section>

      <section className="section reveal">
        <div className="container media-grid">
          {galleryImages.map((image, index) => (
            <img key={image} src={image} alt={`${copy.imageAltPrefix} ${index + 1}`} />
          ))}
        </div>
      </section>

      <section className="section reveal">
        <div className="container section-shell">
          <div className="facility-list">
          {content.facilities.map((item) => (
            <article key={item.title} className="facility-row">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FacilitiesPage;
