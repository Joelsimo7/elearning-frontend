import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-gray-950 border-b border-gray-800">
      
      {/* Logo */}
      <h1 
        onClick={() => navigate('/')}
        className="text-2xl font-bold text-orange-500 cursor-pointer"
      >
        ELearnPro
      </h1>

      {/* Liens */}
      <div className="flex gap-8 text-gray-300">
        <span 
          onClick={() => navigate('/')}
          className="hover:text-white cursor-pointer"
        >
          Accueil
        </span>
        <span 
          onClick={() => navigate('/catalogue')}
          className="hover:text-white cursor-pointer"
        >
          Cours
        </span>
        <span className="hover:text-white cursor-pointer">
          Blog
        </span>
      </div>

      {/* Boutons */}
      <div className="flex gap-3">
        <button
          onClick={() => navigate('/login')}
          className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-5 py-2 rounded-full font-semibold transition"
        >
          Se connecter
        </button>
        <button
          onClick={() => navigate('/register')}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-semibold transition"
        >
          S'inscrire
        </button>
      </div>

    </nav>
  )
}

export default Navbar