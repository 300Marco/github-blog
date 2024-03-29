import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router.tsx'

import { globalStyles } from './styles/global.ts'
import { IssuesProvider } from './contexts/IssuesContexts.tsx'
import { ProfileProvider } from './contexts/ProfileContexts.tsx'

globalStyles()

export function App() {
  return (
    <ProfileProvider>
      <IssuesProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </IssuesProvider>
    </ProfileProvider>
  )
}
