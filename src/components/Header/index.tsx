import { HeaderContainer, SrOnly } from './styles'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <figure>
        <SrOnly>GitHub Blog</SrOnly>

        <img src={logo} alt="GitHub Blog" />
      </figure>
    </HeaderContainer>
  )
}
