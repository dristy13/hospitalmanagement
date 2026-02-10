function TopBar({ welcome, phone }) {
  return (
    <div className="absolute left-0 right-0 top-0 z-30 border-b border-white/15 bg-blue-700 text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-2 text-xs font-semibold sm:px-10 lg:px-16">
        <span>{welcome}</span>
        <span>{phone}</span>
      </div>
    </div>
  )
}

export default TopBar
