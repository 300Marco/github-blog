import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Post } from './pages/Post'
import { DefaultLayout } from './layouts/Default'
import { NotFound } from './pages/NotFound'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/Post/:issueId" element={<Post />} />
        <Route path="/not-found" element={<NotFound />} />
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}
