import doctorOne from "../assets/doctor-1.png";
import doctorTwo from "../assets/doctor-2.png";

function Experts({ experts }) {
  const doctors = experts?.doctors ?? [];
  const tags = experts?.tags ?? [];
  const images = [doctorOne, doctorTwo];
  return (
    <section id="experts" className="mx-auto mt-20 max-w-6xl">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-blue-600/70">
            {experts?.kicker}
          </p>
          <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">
            {experts?.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            {experts?.body}
          </p>
        </div>
        <div className="rounded-full border border-blue-900/10 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
          {experts?.badge}
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {doctors.slice(0, 2).map((doctor, index) => (
          <div
            key={doctor.name}
            className="rounded-[22px] border border-blue-900/10 bg-white p-6 text-slate-900 shadow-md transition hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <img
                src={images[index] ?? images[0]}
                alt={doctor.name}
                className="h-16 w-16 rounded-2xl object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-lg font-semibold">{doctor.name}</p>
                <p className="text-sm text-slate-600">{doctor.role}</p>
              </div>
            </div>
            {tags.length ? (
              <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
                <span>{tags[0]}</span>
                <span>{tags[1] ?? ""}</span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experts;
