import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 py-20">
      <span className="bg-orange-500 text-white text-sm px-4 py-1 rounded-full mb-6">
        Nouveau
      </span>
      <h2 className="text-5xl font-bold leading-tight mb-4 text-white">
        La meilleure plateforme de <br />
        <span className="text-orange-500">formation en ligne</span>
      </h2>
      <p className="text-gray-400 text-lg max-w-xl mb-8">
        Accédez à des centaines de formations de qualité, suivez votre progression et apprenez à votre rythme depuis n'importe où dans le monde.
      </p>
      <button
        onClick={() => navigate('/register')}
        className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3 rounded-full font-bold transition"
      >
        Commencer maintenant
      </button>
    </div>
  )
}

export default Home