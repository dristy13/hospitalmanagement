function Contact({ contact }) {
  return (
    <section id="contact" className="mx-auto mt-20 max-w-6xl">
      <div className="rounded-[36px] border border-blue-900/10 bg-white p-8 text-slate-900 shadow-xl sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600/70">{contact.kicker}</p>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl">{contact.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">{contact.body}</p>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-blue-900/10 bg-blue-50/60 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Emergency</p>
              <p className="mt-2 text-lg font-semibold">{contact.emergency}</p>
            </div>
            <div className="rounded-2xl border border-blue-900/10 bg-blue-50/60 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Appointments</p>
              <p className="mt-2 text-lg font-semibold">{contact.appointments}</p>
            </div>
            <button className="w-full rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/30 transition hover:-translate-y-0.5 hover:bg-blue-600">
              {contact.message}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
