import heroVideo from "../assets/hospital.mp4";

function Hero({ hero }) {
  return (
    <section id="home" className="relative">
      <div className="relative min-h-screen w-full overflow-hidden bg-slate-900">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-slate-900/30"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6 pt-28 text-white sm:px-10 lg:px-16 lg:pt-32">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {hero.badge}
            </div>
            <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl drop-shadow">
              {hero.title}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              {hero.body}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-300">
                {hero.primaryCta}
              </button>
              <button className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/70">
                {hero.secondaryCta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
