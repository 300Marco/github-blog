import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router.tsx'

import { globalStyles } from './styles/global.ts'
import { IssuesProvider } from './contexts/IssuesContexts.tsx'

globalStyles()

export function App() {
  return (
    <IssuesProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </IssuesProvider>
  )
}
