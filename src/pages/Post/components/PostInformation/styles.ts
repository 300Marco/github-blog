import { styled } from '../../../../styles'

export const PostInformationBox = styled('section', {
  borderRadius: '10px',
  padding: '2rem',
  marginTop: '-88px',
  backgroundColor: '$profile',
  width: '100%',
  maxWidth: '864px',

  h2: {
    color: '$title',
    lineHeight: '130%',
    fontWeight: '700',
    fontSize: '1.5rem',
    marginBottom: '0.75rem',
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
})
