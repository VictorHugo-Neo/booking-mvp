import { useEffect, useState } from 'react'
import './index.css'
function App() {
  const [serverStatus, setServerStatus] = useState('Checking...')

  useEffect(() => {
    // Testando a rota /health que criamos no backend
    fetch('http://localhost:3001/health')
      .then(res => res.json())
      .then(data => setServerStatus(data.message))
      .catch(() => setServerStatus('Backend Offline ❌'))
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-slate-100">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Booking MVP</h1>
        <p className="text-slate-500 mb-6">Base configurada pelo Tech Lead.</p>
        
        <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
          <p className="text-sm font-medium text-blue-700">Status da API:</p>
          <p className="text-blue-900 font-mono">{serverStatus}</p>
        </div>

        <button className="mt-6 w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all cursor-not-allowed">
          Iniciar Novo Agendamento (Em breve)
        </button>
      </div>
      
      <footer className="mt-8 text-slate-400 text-sm">
        Stack: React + Vite + Tailwind v4 + Node.js
      </footer>
    </div>
  )
}

export default App