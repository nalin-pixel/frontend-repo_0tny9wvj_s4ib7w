import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function OAuthCallback() {
  const navigate = useNavigate()
  const [status, setStatus] = useState('Completing sign-in...')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')
    if (!token) {
      setStatus('No token provided in callback.')
      return
    }
    localStorage.setItem('token', token)
    // Fetch current user
    fetch(baseUrl + '/auth/me', {
      headers: { Authorization: 'Bearer ' + token },
    })
      .then(r => r.ok ? r.json() : Promise.reject(new Error('Failed to fetch user')))
      .then(user => {
        localStorage.setItem('user', JSON.stringify(user))
        setStatus('Signed in successfully. Redirecting...')
        setTimeout(() => navigate('/'), 600)
      })
      .catch(() => {
        setStatus('Signed in, but failed to load profile. Redirecting...')
        setTimeout(() => navigate('/'), 800)
      })
  }, [])

  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <p className="text-gray-700">{status}</p>
      </div>
    </div>
  )
}
