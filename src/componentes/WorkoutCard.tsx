// src/components/WorkoutCard.tsx
import React from 'react'
import { WorkoutType } from '../types'

interface WorkoutCardProps {
  workout: WorkoutType
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout }) => {
  return (
    <div className="workout-card">
      <h3>{workout.date}</h3>
      <p>{workout.notes}</p>
      <ul>
        {workout.exercises.map((exercise, index) => (
          <li key={index}>
            <strong>{exercise.name}</strong>
            <ul>
              {exercise.sets.map((set, idx) => (
                <li key={idx}>
                  {set.reps} reps x {set.weight} kg
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WorkoutCard