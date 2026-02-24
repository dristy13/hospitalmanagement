import SectionTitle from "../site/SectionTitle";

const fallbackCopy = {
  label: "Health Blog & Resources",
  title: "SEO-focused health resources for smarter preventive care.",
  text: "Educating patients builds long-term trust and supports better treatment outcomes.",
  talkLabel: "Talk to a Specialist",
};

function BlogPage({ content, onNavigate, locale }) {
  const copy = locale?.blog ?? fallbackCopy;

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
          <div className="blog-list">
          {content.blogPosts.map((post) => (
            <article key={post.title} className="blog-row">
              <p className="blog-meta">
                {post.category} | {post.readTime}
              </p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a
                href="/appointment"
                onClick={(event) => onNavigate("/appointment", event)}
              >
                {copy.talkLabel}
              </a>
            </article>
          ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
