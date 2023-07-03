import { useEffect, useState } from 'react'
import { Back } from '../icons/Back'

import { ButtonBox } from './styles'

export const ButtonTop = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200

      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  function handleGoUp() {
    window.scrollTo(0, 0)
  }

  return (
    <ButtonBox onClick={handleGoUp} className={scrolled ? 'scrolled' : ''}>
      <Back width={15} height={15} fill="#E7EDF4" />
    </ButtonBox>
  )
}
