// src/pages/Workouts.tsx
import React, { useEffect, useState } from 'react'
import { WorkoutType } from '../types'
import { getWorkouts } from '../utils/localStorage'
import WorkoutCard from '../componentes/WorkoutCard'

const Workouts: React.FC = () => {
  const [workouts, setWorkouts] = useState<WorkoutType[]>([])

  useEffect(() => {
    const savedWorkouts = getWorkouts()
    setWorkouts(savedWorkouts)
  }, [])

  return (
    <div className="workouts">
      <h2>Tus Entrenamientos</h2>
      {workouts.length > 0 ? (
        workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))
      ) : (
        <p>No tienes entrenamientos guardados.</p>
      )}
    </div>
  )
}

export default Workouts