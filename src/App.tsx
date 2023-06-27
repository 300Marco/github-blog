import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router.tsx'

import { globalStyles } from './styles/global.ts'

globalStyles()

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
