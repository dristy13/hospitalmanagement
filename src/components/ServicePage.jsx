import aboutHero from '../assets/about-hero.jpg'
import gynImg from '../assets/gynac.jpg'
import orthoImg from '../assets/ortho.jpg'
import traumaImg from '../assets/trauma.jpg'

const serviceImages = {
  ent: aboutHero,
  'orthopedic-surgery': orthoImg,
  'trauma-care': traumaImg,
  'icu-and-ventilator-services': gynImg,
}

function ServicePage({ service, slug, contact }) {
  if (!service) {
    return (
      <section className="mx-auto max-w-6xl">
        <div className="rounded-[30px] border border-blue-900/10 bg-white p-8 shadow-xl sm:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-600/70">Service</p>
          <h1 className="mt-3 font-display text-3xl text-slate-900 sm:text-4xl">Service not found</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            The requested service page is unavailable. Please return to the specialities section and choose an
            available service.
          </p>
          <a
            href="/#services"
            className="mt-7 inline-flex rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/30 transition hover:-translate-y-0.5 hover:bg-blue-600"
          >
            Back to Services
          </a>
        </div>
      </section>
    )
  }

  const image = serviceImages[slug] ?? aboutHero
  const emergencyPhone = (contact?.emergency ?? "").replace(/\s+/g, "")
  const appointmentPhone = (contact?.appointments ?? "").replace(/\s+/g, "")

  return (
    <section className="mx-auto max-w-6xl space-y-8">
      <a href="/#services" className="inline-flex text-sm font-semibold text-blue-700 transition hover:text-blue-600">
        Back to all services
      </a>

      <div className="overflow-hidden rounded-[30px] border border-blue-900/10 bg-white shadow-xl">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600/70">Speciality Page</p>
            <h1 className="mt-3 font-display text-3xl text-slate-900 sm:text-5xl">{service.title}</h1>
            <p className="mt-3 text-base font-semibold text-slate-700">{service.subtitle}</p>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">{service.summary}</p>

            <div className="mt-6 rounded-2xl border border-blue-900/10 bg-blue-50/70 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Availability</p>
              <p className="mt-2 text-sm font-semibold text-slate-800 sm:text-base">{service.availability}</p>
            </div>
          </div>
          <img src={image} alt={service.title} className="h-full min-h-72 w-full object-cover" loading="lazy" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {service.highlights.map((item) => (
          <div key={item.label} className="rounded-2xl border border-blue-900/10 bg-white p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-[24px] border border-blue-900/10 bg-white p-6 shadow-sm">
          <h2 className="font-display text-2xl text-slate-900">What we treat</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
            {service.careIncludes.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[24px] border border-blue-900/10 bg-white p-6 shadow-sm">
          <h2 className="font-display text-2xl text-slate-900">Core procedures</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
            {service.procedures.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[24px] border border-blue-900/10 bg-white p-6 shadow-sm">
          <h2 className="font-display text-2xl text-slate-900">Care pathway</h2>
          <ol className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
            {service.pathway.map((item, index) => (
              <li key={item} className="flex gap-3">
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="rounded-[28px] border border-blue-900/10 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600/70">Need immediate support?</p>
            <h2 className="mt-2 font-display text-2xl text-slate-900 sm:text-3xl">Our care desk is ready 24x7</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              For urgent symptoms, trauma, breathing distress, or rapid specialist consultation, contact our team
              immediately.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={`tel:${emergencyPhone}`}
              className="rounded-full bg-emerald-400 px-5 py-2.5 text-center text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300"
            >
              Emergency: {contact?.emergency}
            </a>
            <a
              href={`tel:${appointmentPhone}`}
              className="rounded-full border border-blue-600/30 px-5 py-2.5 text-center text-sm font-semibold text-blue-700 transition hover:border-blue-600/60"
            >
              Appointments: {contact?.appointments}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicePage
