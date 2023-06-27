import { ArrowSquareOut } from '../../../../components/icons/ArrowSquareOut'
import { Building } from '../../../../components/icons/Building'
import { Followers } from '../../../../components/icons/Followers'
import { GitHub } from '../../../../components/icons/GitHub'
import profile from '../../../../assets/profile.png'

import {
  HeaderProfileContent,
  ProfileContainer,
  ProfileContent,
  ProfileStatus,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <figure>
        <img src={profile} alt="" />
      </figure>

      <ProfileContent>
        <HeaderProfileContent>
          <h2>Cameron Williamson</h2>

          {/* <div> */}
          <a href="#">
            <span>github</span>
            <ArrowSquareOut width={12} height={13} />
          </a>
          {/* </div> */}
        </HeaderProfileContent>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <ProfileStatus>
          <ul>
            <li>
              <GitHub size={18} />

              <span>cameronwll</span>
            </li>

            <li>
              <Building size={18} />

              <span>RocketSeat</span>
            </li>

            <li>
              <Followers size={18} />

              <span>32 seguidores</span>
            </li>
          </ul>
        </ProfileStatus>
      </ProfileContent>
    </ProfileContainer>
  )
}
