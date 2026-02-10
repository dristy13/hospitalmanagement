function Departments({ departments }) {
  const items = departments?.items ?? []
  return (
    <section id="departments" className="mx-auto mt-20 max-w-6xl">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-blue-600/70">
            {departments?.kicker}
          </p>
          <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">
            {departments?.title}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600">
            {departments?.body}
          </p>
        </div>
        <div className="rounded-[28px] border border-blue-900/10 bg-white p-6 text-slate-900 shadow-lg">
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-blue-900/10 bg-blue-50/60 p-4"
              >
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="mt-2 text-xs text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Departments
