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
              <div className="stars" aria-label={`${item.rating} ${copy.ratingLabel}`}>
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
