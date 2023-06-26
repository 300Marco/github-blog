import { HeaderContainer } from './styles'

import logo from '../../assets/logo.svg'

export function Home() {
  return (
    <>
      <HeaderContainer>
        <figure>
          <img src={logo} alt="GitHub Blog" />
        </figure>
      </HeaderContainer>
    </>
  )
}
