import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Catalogue from './pages/Catalogue'
import Dashboard from './pages/Dashboard'
import CoursePlayer from './pages/CoursePlayer'

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cours/:id" element={<CoursePlayer />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App