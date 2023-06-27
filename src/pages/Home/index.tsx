import logo from '../../assets/logo.svg'

import { Profile } from './components/Profile'
import { SearchProfile } from './components/SearchProfile'

import { HeaderContainer, HomeContainer, SrOnly } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HeaderContainer>
        <figure>
          <SrOnly>GitHub Blog</SrOnly>

          <img src={logo} alt="GitHub Blog" />
        </figure>
      </HeaderContainer>

      <Profile />

      <SearchProfile />
    </HomeContainer>
  )
}
