import { Content } from './components/Content'
import { PostInformation } from './components/PostInformation'
import { PostContainer } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostInformation />
      <Content />
    </PostContainer>
  )
}
