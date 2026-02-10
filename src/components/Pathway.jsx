function Pathway({ pathway }) {
  const steps = pathway?.steps ?? []
  return (
    <section id="pathway" className="mx-auto mt-20 max-w-6xl">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-blue-600/70">{pathway?.kicker}</p>
          <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">{pathway?.title}</h2>
        </div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-[26px] border border-blue-900/10 bg-white p-6 text-slate-900 shadow-lg"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600/70">0{index + 1}</p>
            <p className="mt-3 text-lg font-semibold">{step.title}</p>
            <p className="mt-2 text-sm text-slate-600">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pathway
