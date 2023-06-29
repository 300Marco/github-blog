import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface ProfileData {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
  html_url: string
}

interface ProfileContextType {
  profile: ProfileData
  fetchProfile: () => void
}

export const ProfileContext = createContext({} as ProfileContextType)

interface ProfileProviderProps {
  children: ReactNode
}

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [profile, setProfile] = useState<ProfileData>({} as ProfileData)

  async function fetchProfile() {
    const response = await api.get('/users/300Marco')

    setProfile(response.data)
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <ProfileContext.Provider value={{ fetchProfile, profile }}>
      {children}
    </ProfileContext.Provider>
  )
}
