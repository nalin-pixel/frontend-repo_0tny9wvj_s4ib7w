import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import AuthModal from './components/AuthModal'
import GameCard from './components/GameCard'

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

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight">Your Indie Game Hub</h1>
          <p className="text-gray-600 mt-1">Play in the browser or download for your PC. Sign in to keep your progress.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((g)=> (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>
      </section>

      {showAuth && (
        <AuthModal open={showAuth} onClose={()=>setShowAuth(false)} onAuthed={(u)=>setUser(u)} />
      )}
    </div>
  )
}

export default App
