function Insurance({ insurance }) {
  const partners = insurance?.partners ?? []
  return (
    <section id="insurance" className="mx-auto mt-20 max-w-6xl">
      <div className="rounded-[32px] border border-blue-900/10 bg-white p-8 text-slate-900 shadow-xl">
        <p className="text-xs uppercase tracking-[0.3em] text-blue-600/70">{insurance?.kicker}</p>
        <h2 className="font-display mt-3 text-3xl sm:text-4xl">{insurance?.title}</h2>
        <p className="mt-4 text-sm text-slate-600">{insurance?.body}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {partners.map((partner) => (
            <span
              key={partner}
              className="rounded-full border border-blue-900/10 bg-blue-50 px-4 py-2 text-xs font-semibold text-slate-700"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Insurance
