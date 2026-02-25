import SectionTitle from "../site/SectionTitle";

const fallbackCopy = {
  label: "Patient Testimonials",
  title: "Outcomes and experiences that build trust before the first visit.",
  text: "Ratings, written feedback, and video stories help new patients choose confidently.",
  playLabel: "PLAY",
  ratingLabel: "star rating",
};

function TestimonialsPage({ content, locale }) {
  const copy = locale?.testimonials ?? fallbackCopy;

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
          .quote-list, .story-list {
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
        <div className="container section-shell">
          <div className="quote-list">
            {content.testimonials.map((item) => (
              <article key={item.name} className="quote-row">
                <div
                  className="stars"
                  aria-label={`${item.rating} ${copy.ratingLabel}`}
                >
                  {"*****".slice(0, item.rating)}
                </div>
                <p>{item.quote}</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.department}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container section-shell">
          <div className="story-list">
            {content.videoStories.map((story) => (
              <article key={story.title} className="story-row">
                <div className="video-placeholder" aria-hidden>
                  {copy.playLabel}
                </div>
                <h3>{story.title}</h3>
                <p>{story.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestimonialsPage;
