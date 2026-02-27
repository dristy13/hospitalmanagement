import aboutHero from "../assets/about-hero.jpg";
import gynImg from "../assets/gynac.jpg";
import orthoImg from "../assets/ortho.jpg";
import traumaImg from "../assets/trauma.jpg";

const serviceImages = {
  ent: aboutHero,
  "orthopedic-surgery": orthoImg,
  "trauma-care": traumaImg,
  "icu-and-ventilator-services": gynImg,
};

function ServicePage({ service, slug, contact }) {
  if (!service) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-lg font-semibold text-blue-600">
            404
          </p>
          <h1 className="mt-4 font-display text-4xl text-slate-900 sm:text-5xl">
            Service not found
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            The requested service page is unavailable. Please return to the
            specialities section and choose an available service.
          </p>
          <a
            href="/#services"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 hover:shadow-blue-600/30"
          >
            Back to Services
          </a>
        </div>
      </div>
    );
  }

  const image = serviceImages[slug] ?? aboutHero;
  const emergencyPhone = (contact?.emergency ?? "").replace(/\s+/g, "");
  const appointmentPhone = (contact?.appointments ?? "").replace(/\s+/g, "");

  return (
    <div className="bg-slate-50 pb-24 pt-32 sm:pt-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Back Link */}
        <div className="mb-12">
          <a
            href="/#services"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-slate-500 transition hover:text-blue-600"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-900/5 transition group-hover:ring-blue-600/20">
              <span className="transition group-hover:-translate-x-0.5">
                &larr;
              </span>
            </span>
            Back to all services
          </a>
        </div>

        {/* Hero Section */}
        <div className="overflow-hidden rounded-[3rem] bg-white shadow-xl shadow-slate-200/50 ring-1 ring-slate-900/5">
          <div className="grid lg:grid-cols-2">
            <div className="order-2 flex flex-col justify-center p-10 sm:p-14 lg:p-16 lg:order-1">
              <div>
                <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  Speciality Page
                </div>
                <h1 className="mt-6 font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                  {service.title}
                </h1>
                <p className="mt-6 text-lg font-medium text-slate-700">
                  {service.subtitle}
                </p>
                <p className="mt-6 text-base leading-relaxed text-slate-600">
                  {service.summary}
                </p>

                <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Availability
                    </p>
                    <p className="font-medium text-slate-900">
                      {service.availability}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 relative min-h-[20rem] bg-slate-100 lg:h-auto lg:order-2">
              <img
                src={image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-l" />
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {service.highlights.map((item) => (
            <div
              key={item.label}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5 transition hover:shadow-md"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blue-50 transition group-hover:scale-150 group-hover:bg-blue-100/50" />
              <p className="relative text-xs font-bold uppercase tracking-wider text-slate-500">
                {item.label}
              </p>
              <p className="relative mt-4 font-display text-4xl font-medium text-blue-600">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Details Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* What we treat */}
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5">
            <h2 className="font-display text-2xl font-medium text-slate-900">
              What we treat
            </h2>
            <ul className="mt-8 space-y-4">
              {service.careIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm leading-6 text-slate-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core procedures */}
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5">
            <h2 className="font-display text-2xl font-medium text-slate-900">
              Core procedures
            </h2>
            <ul className="mt-8 space-y-4">
              {service.procedures.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <span className="text-sm leading-6 text-slate-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Care pathway */}
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5">
            <h2 className="font-display text-2xl font-medium text-slate-900">
              Care pathway
            </h2>
            <ol className="mt-8 space-y-8">
              {service.pathway.map((item, index) => (
                <li key={item} className="relative flex gap-4">
                  {index !== service.pathway.length - 1 && (
                    <div className="absolute left-[11px] top-8 h-full w-px bg-slate-200" />
                  )}
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white shadow-sm">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-6 text-slate-600">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 overflow-hidden rounded-[3rem] bg-slate-900 px-6 py-16 shadow-2xl shadow-slate-900/20 sm:px-16 lg:flex lg:items-center lg:justify-between lg:px-20">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Need immediate support?
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Our care desk is ready 24x7. For urgent symptoms or rapid
              specialist consultation.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:mt-0">
            <a
              href={`tel:${emergencyPhone}`}
              className="inline-flex justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-900 transition hover:bg-blue-50"
            >
              Emergency: {contact?.emergency}
            </a>
            <a
              href={`tel:${appointmentPhone}`}
              className="inline-flex justify-center rounded-full border border-slate-700 px-8 py-4 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
