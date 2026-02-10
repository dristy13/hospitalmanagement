function BackgroundVideo() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[#f4f8fb]" aria-hidden />
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-200/50 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-emerald-100/70 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
      </div>
    </>
  );
}

export default BackgroundVideo;
