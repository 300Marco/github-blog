import { Posts } from './components/Posts'

import { Profile } from './components/Profile'
import { SearchProfile } from './components/SearchProfile'

import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchProfile />
      <Posts />
    </HomeContainer>
  )
}
