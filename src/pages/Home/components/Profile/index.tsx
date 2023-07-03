import { useContext } from 'react'
import { ProfileContext } from '../../../../contexts/ProfileContexts'

import {
  Avatar,
  HeaderProfileContent,
  ProfileContainer,
  ProfileContent,
  ProfileStatus,
} from './styles'

import { ArrowSquareOut } from '../../../../components/icons/ArrowSquareOut'
import { GitHub } from '../../../../components/icons/GitHub'
import { Building } from '../../../../components/icons/Building'
import { Followers } from '../../../../components/icons/Followers'

export function Profile() {
  const { profile } = useContext(ProfileContext)

  return (
    <ProfileContainer>
      <Avatar>
        <img src={profile.avatar_url} alt="" />
      </Avatar>

      <ProfileContent>
        <HeaderProfileContent>
          <h2>{profile.name}</h2>

          <a href={profile.html_url} target="_blank" rel="noreferrer">
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
