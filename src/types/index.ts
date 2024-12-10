export interface WorkoutType {
  id: string
  date: string
  exercises: Exercise[]
  notes?: string
}

export interface Exercise {
  name: string
  sets: Set[]
}

export interface Set {
  reps: number
  weight: number
}

export interface UserProfile {
  name: string
  weight: number
  height: number
  goal: string
}