import aboutHero from "../assets/about-hero.jpg";

function About({ about }) {
  const bullets = about?.bullets ?? [];
  return (
    <section id="about" className="mx-auto mt-20 max-w-6xl">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="rounded-[28px] border border-blue-900/10 bg-white p-6 shadow-xl">
          <img
            src={aboutHero}
            alt="Hospital care"
            className="w-full rounded-[22px]"
          />
        </div>
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-600/70">
            {about?.kicker}
          </p>
          <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">
            {about?.title}
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            {about?.body}
          </p>
          <div className="grid gap-3">
            {bullets.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-blue-900/10 bg-blue-50/70 px-4 py-3"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
