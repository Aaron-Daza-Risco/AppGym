// src/pages/Profile.tsx
import React, { useState, useEffect } from 'react'
import { UserProfile } from '../types'
import { getProfile, saveProfile } from '../utils/localStorage'

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    weight: 0,
    height: 0,
    goal: '',
  })

  useEffect(() => {
    const savedProfile = getProfile()
    if (savedProfile) {
      setProfile(savedProfile)
    }
  }, [])

  const handleSaveProfile = () => {
    saveProfile(profile)
    alert('Perfil guardado')
  }

  return (
    <div className="profile">
      <h2>Perfil</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSaveProfile()
        }}
      >
        <label>
          Nombre:
          <input
            type="text"
            value={profile.name}
            onChange={(e) =>
              setProfile({ ...profile, name: e.target.value })
            }
            required
          />
        </label>
        <label>
          Peso (kg):
          <input
            type="number"
            value={profile.weight}
            onChange={(e) =>
              setProfile({ ...profile, weight: Number(e.target.value) })
            }
          />
        </label>
        <label>
          Altura (cm):
          <input
            type="number"
            value={profile.height}
            onChange={(e) =>
              setProfile({ ...profile, height: Number(e.target.value) })
            }
          />
        </label>
        <label>
          Objetivo:
          <input
            type="text"
            value={profile.goal}
            onChange={(e) =>
              setProfile({ ...profile, goal: e.target.value })
            }
          />
        </label>
        <button type="submit">Guardar Perfil</button>
      </form>
    </div>
  )
}

export default Profile