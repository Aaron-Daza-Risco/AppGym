import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './componentes/Layout/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Workouts from './pages/Workouts'
import AddWorkout from './pages/AddWorkout'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Navbar />
      <div style={{ paddingTop: '64px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/add-workout" element={<AddWorkout />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App