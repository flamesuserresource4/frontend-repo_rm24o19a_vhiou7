export default function HowItWorks() {
  const steps = [
    {
      title: 'Tell us your focus',
      desc: 'Share a short goal for the next 50 minutes. This gives your partner context and boosts accountability.'
    },
    {
      title: 'Get paired instantly',
      desc: 'We match you 1:1 with someone also here to work. Cameras stay on. Audio stays muted by default.'
    },
    {
      title: 'Work quietly together',
      desc: 'A clean timer guides the session. Light gestures and chat help you check in without breaking flow.'
    }
  ];
  return (
    <section id="how" className="relative bg-black text-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">How FocusSync works</h2>
        <p className="mt-3 text-white/70 max-w-2xl">Simple by design. Built for deep work, not small talk.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-medium">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
