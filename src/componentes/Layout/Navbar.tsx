// src/components/Layout/Navbar.tsx
import { Link as RouterLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <RouterLink to="/" className="nav-logo">
          GymTracker
        </RouterLink>
        <div className="nav-links">
          <RouterLink to="/" className="nav-link">
            Inicio
          </RouterLink>
          <RouterLink to="/workouts" className="nav-link">
            Entrenamientos
          </RouterLink>
          <RouterLink to="/add-workout" className="nav-link">
            Añadir
          </RouterLink>
          <RouterLink to="/profile" className="nav-link nav-link-profile">
            Perfil
          </RouterLink>
        </div>
      </div>
    </nav>
  )
}