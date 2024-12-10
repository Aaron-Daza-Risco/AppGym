import { WorkoutType, UserProfile } from '../types'

export const saveWorkouts = (workouts: WorkoutType[]): void => {
  localStorage.setItem('workouts', JSON.stringify(workouts))
}

export const getWorkouts = (): WorkoutType[] => {
  const workouts = localStorage.getItem('workouts')
  return workouts ? JSON.parse(workouts) : []
}

export const saveProfile = (profile: UserProfile): void => {
  localStorage.setItem('profile', JSON.stringify(profile))
}

export const getProfile = (): UserProfile | null => {
  const profile = localStorage.getItem('profile')
  return profile ? JSON.parse(profile) : null
}