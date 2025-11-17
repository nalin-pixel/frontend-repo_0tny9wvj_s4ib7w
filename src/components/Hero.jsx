import { motion } from 'framer-motion'

export default function Hero({ onLogin }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-300 to-purple-300 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-tr from-pink-300 to-yellow-300 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Play your games anywhere. Save progress automatically.
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            A polished hub for your Unity titles — instant WebGL play, secure sign‑in, and downloadable desktop builds.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={onLogin} className="rounded-md bg-gray-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-black transition">
              Get started
            </button>
            <a href="#games" className="rounded-md border border-gray-300 px-5 py-2.5 text-sm hover:bg-white/60 backdrop-blur">
              Browse games
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
          <div className="aspect-video w-full rounded-xl border border-gray-200 bg-white/70 shadow-xl overflow-hidden">
            <div className="h-full w-full grid place-items-center">
              <motion.div animate={{ rotate: [0, 2, -2, 0] }} transition={{ repeat: Infinity, duration: 6 }} className="text-center p-6">
                <p className="text-sm text-gray-500">WebGL Preview</p>
                <h3 className="text-2xl font-semibold mt-1">Tower Defence</h3>
                <p className="text-gray-600 mt-2">Defend against waves, upgrade towers, and climb the leaderboards.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
