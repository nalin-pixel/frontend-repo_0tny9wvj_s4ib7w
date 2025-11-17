import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import AuthModal from './components/AuthModal'
import GameCard from './components/GameCard'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  const [user, setUser] = useState(null)
  const [showAuth, setShowAuth] = useState(false)
  const [games, setGames] = useState([])

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const u = localStorage.getItem('user')
    if (u) setUser(JSON.parse(u))
    fetch(baseUrl + '/games').then(r=>r.json()).then(setGames).catch(()=>{})
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar user={user} onLoginClick={()=>setShowAuth(true)} onLogout={handleLogout} />

      <Hero onLogin={() => setShowAuth(true)} />

      <section id="games" className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Featured games</h2>
          <p className="text-gray-600 mt-1">Play in the browser or download for your PC. Sign in to keep your progress.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((g)=> (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>
      </section>

      <Footer />

      {showAuth && (
        <AuthModal open={showAuth} onClose={()=>setShowAuth(false)} onAuthed={(u)=>setUser(u)} />
      )}
    </div>
  )
}

export default App
