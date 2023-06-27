import logo from '../../assets/logo.svg'

import { HeaderContainer, PostContainer, SrOnly } from './styles'

export function Post() {
  return (
    <PostContainer>
      <HeaderContainer>
        <figure>
          <SrOnly>GitHub Blog</SrOnly>

          <img src={logo} alt="GitHub Blog" />
        </figure>
      </HeaderContainer>
    </PostContainer>
  )
}
