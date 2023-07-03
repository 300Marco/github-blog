import { keyframes, styled } from '../../../../styles'

const postInfoAnimation = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-50px)',
  },

  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

export const PostInformationBox = styled('section', {
  borderRadius: '10px',
  padding: '2rem',
  marginTop: '-88px',
  backgroundColor: '$profile',
  width: '100%',
  maxWidth: '864px',

  animation: `${postInfoAnimation} 300ms ease-out 500ms`,
  animationFillMode: 'both',

  h2: {
    color: '$title',
    lineHeight: '130%',
    fontWeight: '700',
    fontSize: '1.5rem',
    marginBottom: '0.75rem',
  },

  '@mobile': {
    textAlign: 'center',
    padding: '2rem 0.75rem',

    h2: {
      marginBottom: '1rem',
    },
  },
})

export const NavigationLinks = styled('nav', {
  marginBottom: '1.25rem',

  ul: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  a: {
    color: '$blue',
    fontSize: '0.75rem',
    fontWeight: '700',
    lineHeight: '160%',
    borderBottom: '1px solid transparent',
    textTransform: 'uppercase',

    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',

    transition: 'color 300ms',

    '&:hover': {
      borderBottom: '1px solid $blue',
    },
  },
})

export const TitleBoxStatus = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',

  li: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },

  '@mobile': {
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1.5rem 2rem',
  },
})
