import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qMOKV671Z1CM9yS7/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-16 sm:pt-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
            FocusSync — Body Double for Deep Work
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl">
            Stay on camera. Stay accountable. Get more done.
          </h1>
          <p className="mt-4 text-white/70 text-lg">
            A calm, peer‑to‑peer matching space for 50‑minute focus sprints. Video always on. Audio muted by default. Built for remote workers, students, and ADHD brains.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#match" className="rounded-lg bg-yellow-400 px-5 py-3 text-black font-medium hover:bg-yellow-300 transition">Start a focus session</a>
            <a href="#how" className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition">How it works</a>
          </div>
        </div>
      </div>
    </section>
  );
}
