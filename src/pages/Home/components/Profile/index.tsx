import { ArrowSquareOut } from '../../../../components/icons/ArrowSquareOut'
import { Building } from '../../../../components/icons/Building'
import { Followers } from '../../../../components/icons/Followers'
import { GitHub } from '../../../../components/icons/GitHub'

import {
  Avatar,
  HeaderProfileContent,
  ProfileContainer,
  ProfileContent,
  ProfileStatus,
} from './styles'
import { api } from '../../../../lib/axios'
import { useEffect, useState } from 'react'

interface ProfileData {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileData>({} as ProfileData)

  async function fetchProfile() {
    const response = await api.get('/users/300Marco')

    setProfile(response.data)
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <ProfileContainer>
      <Avatar>
        <img src={profile.avatar_url} alt="" />
      </Avatar>

      <ProfileContent>
        <HeaderProfileContent>
          <h2>{profile.name}</h2>

          <a href="#">
            <span>github</span>
            <ArrowSquareOut width={12} height={13} />
          </a>
        </HeaderProfileContent>

        <p>{profile.bio}</p>

        <ProfileStatus>
          <ul>
            <li>
              <GitHub size={18} />

              <span>{profile.login}</span>
            </li>

            <li>
              <Building size={18} />

              <span>{profile.company}</span>
            </li>

            <li>
              <Followers size={18} />

              <span>{profile.followers} seguidores</span>
            </li>
          </ul>
        </ProfileStatus>
      </ProfileContent>
    </ProfileContainer>
  )
}
