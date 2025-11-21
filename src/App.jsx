import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Matchmaker from './components/Matchmaker'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <HowItWorks />
      <Matchmaker />
      <footer className="bg-black text-white/60 text-sm py-10">
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
          <p>FocusSync — A calm space for deep work</p>
          <p>Video on • Audio muted by default • 50‑minute sessions</p>
        </div>
      </footer>
    </div>
  )
}

export default App
