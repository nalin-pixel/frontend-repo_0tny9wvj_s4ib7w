import { useEffect, useState } from 'react'
import { LogIn, LogOut, User } from 'lucide-react'

export default function Navbar({ user, onLoginClick, onLogout }) {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tight">Indie Games</a>
        <nav className="flex items-center gap-3">
          <a href="/" className="text-gray-700 hover:text-black">Home</a>
          <a href="/test" className="text-gray-700 hover:text-black">Status</a>
        </nav>
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700">
                <User size={16} />
                <span className="text-sm">{user.name}</span>
              </div>
              <button onClick={onLogout} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-900 text-white text-sm hover:bg-black">
                <LogOut size={16} /> Logout
              </button>
            </>
          ) : (
            <button onClick={onLoginClick} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-900 text-white text-sm hover:bg-black">
              <LogIn size={16} /> Login
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
