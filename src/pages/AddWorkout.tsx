// src/pages/AddWorkout.tsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { WorkoutType, Exercise } from '../types'
import { saveWorkouts, getWorkouts } from '../utils/localStorage'

const AddWorkout: React.FC = () => {
  const [date, setDate] = useState('')
  const [notes, setNotes] = useState('')
  const [exercises, setExercises] = useState<Exercise[]>([])
  const navigate = useNavigate()

  const handleAddExercise = () => {
    const newExercise: Exercise = {
      name: '',
      sets: [],
    }
    setExercises([...exercises, newExercise])
  }

  const handleSaveWorkout = () => {
    const newWorkout: WorkoutType = {
      id: Date.now().toString(),
      date,
      notes,
      exercises,
    }
    const workouts = getWorkouts()
    saveWorkouts([...workouts, newWorkout])
    navigate('/workouts')
  }

  return (
    <div className="add-workout">
      <h2>Añadir Entrenamiento</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSaveWorkout()
        }}
      >
        <label>
          Fecha:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Notas:
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </label>
        <h3>Ejercicios</h3>
        {exercises.map((exercise, index) => (
          <div key={index} className="exercise">
            <label>
              Nombre del Ejercicio:
              <input
                type="text"
                value={exercise.name}
                onChange={(e) => {
                  const newExercises = [...exercises]
                  newExercises[index].name = e.target.value
                  setExercises(newExercises)
                }}
                required
              />
            </label>
            {/* Aquí puedes añadir inputs para los sets */}
          </div>
        ))}
        <button type="button" onClick={handleAddExercise}>
          Añadir Ejercicio
        </button>
        <button type="submit">Guardar Entrenamiento</button>
      </form>
    </div>
  )
}

export default AddWorkout