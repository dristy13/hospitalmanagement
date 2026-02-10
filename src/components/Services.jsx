import orthoImg from "../assets/ortho.jpg";
import gynImg from "../assets/gynac.jpg";
import traumaImg from "../assets/trauma.jpg";

function Services({ services }) {
  const items = services?.items ?? [];
  const images = [orthoImg, gynImg, traumaImg];
  return (
    <section id="services" className="mx-auto mt-20 max-w-6xl">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-blue-600/70">
            {services?.kicker}
          </p>
          <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">
            {services?.title}
          </h2>
        </div>
        <button className="rounded-full border border-blue-600/30 px-5 py-2 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:border-blue-600/60">
          {services?.cta}
        </button>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.slice(0, 3).map((service, index) => (
          <div
            key={service.title}
            className="group overflow-hidden rounded-[22px] border border-blue-900/10 bg-white shadow-md transition hover:-translate-y-1"
          >
            <img
              src={images[index] ?? images[0]}
              alt={service.title}
              className="h-40 w-full object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
              <button className="mt-6 text-sm font-semibold text-blue-700">
                {services?.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
