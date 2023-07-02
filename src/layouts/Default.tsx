import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { ButtonTop } from '../components/ButtonTop'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <ButtonTop />
    </>
  )
}
