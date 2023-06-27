import { styled } from '../../styles'
import backgroundHeader from '../../assets/background-header.svg'

export const HomeContainer = styled('div', {
  paddingBottom: '6rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const HeaderContainer = styled('header', {
  backgroundColor: '$profile',
  backgroundImage: `url(${backgroundHeader})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '4rem 0 8.375rem',
  width: '100%',
  maxWidth: '2000px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    width: '148px',
    height: '98px',
  },
})

export const SrOnly = styled('h1', {
  position: 'absolute',
  height: '1px',
  width: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clipPath: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  borderWidth: 0,
})
