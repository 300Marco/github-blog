import { styled } from '../../styles'
import backgroundHeader from '../../assets/background-header.svg'

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
