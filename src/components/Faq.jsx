function Faq({ faq }) {
  const items = faq?.items ?? []
  return (
    <section id="faq" className="mx-auto mt-20 max-w-6xl">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-blue-600/70">{faq?.kicker}</p>
        <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">{faq?.title}</h2>
      </div>
      <div className="mt-8 grid gap-4">
        {items.map((item) => (
          <div
            key={item.q}
            className="rounded-[22px] border border-blue-900/10 bg-white p-5 text-slate-900 shadow-sm"
          >
            <p className="text-sm font-semibold">{item.q}</p>
            <p className="mt-2 text-sm text-slate-600">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faq
