import { Container } from './App.ts'
import { Home } from './pages/Home/index.tsx'
import { globalStyles } from './styles/global.ts'

globalStyles()
export function App() {
  return (
    <Container>
      <Home />
    </Container>
  )
}
