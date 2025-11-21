import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Matchmaker() {
  const [name, setName] = useState('')
  const [topic, setTopic] = useState('')
  const [status, setStatus] = useState('idle')
  const [match, setMatch] = useState(null)

  useEffect(() => {
    if (status !== 'searching') return
    const controller = new AbortController()

    async function join() {
      try {
        const res = await fetch(`${API_BASE}/queue/join`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user_name: name || 'Guest', focus_topic: topic })
        })
        const data = await res.json()
        if (data.matched) {
          setMatch(data)
        } else {
          // poll again after a short delay
          setTimeout(join, 1500)
        }
      } catch (e) {
        console.error(e)
      }
    }
    join()

    return () => controller.abort()
  }, [status, name, topic])

  return (
    <section id="match" className="bg-black text-white py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-2xl font-semibold">Start a 50‑minute session</h2>
          <p className="text-white/70 mt-1">Video on. Audio muted by default. For accountability, not socializing.</p>

          {!match ? (
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" className="sm:col-span-1 w-full rounded-lg bg-white/5 px-4 py-3 outline-none border border-white/10 focus:border-yellow-400" />
              <input value={topic} onChange={(e)=>setTopic(e.target.value)} placeholder="What will you work on?" className="sm:col-span-2 w-full rounded-lg bg-white/5 px-4 py-3 outline-none border border-white/10 focus:border-yellow-400" />
              <button onClick={()=>setStatus('searching')} className="sm:col-span-3 rounded-lg bg-yellow-400 text-black font-medium px-5 py-3 hover:bg-yellow-300 transition">Find me a partner</button>
            </div>
          ) : (
            <div className="mt-6">
              <div className="rounded-lg border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-200">
                <p className="font-medium">Match found!</p>
                <p className="text-sm mt-1">Session ID: {match.session_id}</p>
              </div>
              <div className="mt-4">
                <SessionPreview />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function SessionPreview() {
  // Camera on, mic muted UI representation only
  return (
    <div className="rounded-xl overflow-hidden border border-white/10">
      <div className="aspect-video bg-gradient-to-br from-slate-900 to-black grid sm:grid-cols-2">
        <VideoTile name="You" muted />
        <VideoTile name="Partner" muted />
      </div>
      <div className="flex items-center justify-between bg-black/60 px-4 py-3">
        <div className="text-white/70 text-sm">50:00 Timer • Audio muted by default</div>
        <div className="flex gap-2">
          <Control label="Camera On" active />
          <Control label="Mic Muted" />
        </div>
      </div>
    </div>
  )
}

function VideoTile({ name, muted }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-white/5" />
      <div className="absolute right-2 top-2 rounded-full bg-black/70 px-2 py-1 text-xs text-white/80">{muted ? 'Muted' : 'Live'}</div>
      <div className="absolute left-2 bottom-2 rounded bg-black/70 px-2 py-1 text-xs text-white/80">{name}</div>
    </div>
  )
}

function Control({ label, active }) {
  return (
    <div className={`rounded-md px-3 py-2 text-xs font-medium ${active ? 'bg-white text-black' : 'bg-white/10 text-white/80'}`}>{label}</div>
  )
}
