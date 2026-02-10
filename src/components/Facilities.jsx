function Facilities({ facilities }) {
  const features = facilities?.features ?? []
  const testimonials = facilities?.testimonials ?? []
  return (
    <section id="facilities" className="mx-auto mt-20 max-w-6xl">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[32px] border border-blue-900/10 bg-white p-8 text-slate-900 shadow-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-600/70">{facilities?.kicker}</p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl">{facilities?.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">{facilities?.body}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-blue-900/10 bg-blue-50/60 p-4 text-sm font-semibold"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-blue-900/10 bg-white p-8 text-slate-900 shadow-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-600/70">{facilities?.stories}</p>
          <div className="mt-6 space-y-5">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-2xl bg-blue-50/60 p-5">
                <p className="text-sm leading-relaxed text-slate-600">"{testimonial.quote}"</p>
                <p className="mt-3 text-sm font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-blue-700 px-5 py-4 text-sm text-white">
            <p className="font-semibold text-white">{facilities?.bannerTitle}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/80">
              {facilities?.bannerTags}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Facilities
