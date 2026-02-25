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
      <style>{`
        .page-hero {
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            padding: 6rem 0 4rem;
            border-radius: 0 0 3rem 3rem;
            margin-bottom: 3rem;
            text-align: center;
        }
        .page-hero h2 {
            font-size: 3rem;
            color: #0f172a;
            margin-bottom: 1rem;
            line-height: 1.2;
        }
        .page-hero p {
            color: #2563eb;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
        }
        .page-hero span {
            color: #475569;
            font-size: 1.125rem;
            line-height: 1.7;
            display: block;
            max-width: 600px;
            margin: 0 auto;
        }
        @media (max-width: 768px) {
          .media-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .facility-list {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .container { padding: 0 20px; }
        }
      `}</style>
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
            <img
              key={image}
              src={image}
              alt={`${copy.imageAltPrefix} ${index + 1}`}
            />
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
