import { HeaderContainer } from './styles'

import logo from '../../assets/logo.svg'
import { Profile } from './components/Profile'

export function Home() {
  return (
    <>
      <HeaderContainer>
        <figure>
          <img src={logo} alt="GitHub Blog" />
        </figure>
      </HeaderContainer>

      <Profile />
    </>
  )
}
