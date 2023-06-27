import { styled } from '../../../../styles'

export const ProfileContainer = styled('section', {
  borderRadius: '10px',
  padding: '2rem',
  marginTop: '-88px',
  backgroundColor: '$profile',
  width: '100%',
  maxWidth: '864px',

  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
})

export const ProfileContent = styled('div', {
  p: {
    lineHeight: '160%',
    marginBottom: '1.5rem',
  },
})

export const HeaderProfileContent = styled('header', {
  marginBottom: '0.5rem',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',

  h2: {
    color: '$title',
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '130%',
  },

  div: {
    display: 'flex',
    alignItems: 'start',
    gap: '0.5rem',

    a: {
      color: '$blue',
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: '0.75rem',
      lineHeight: '160%',
    },

    svg: {
      color: '$blue',
    },
  },
})

export const ProfileStatus = styled('section', {
  ul: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },

  li: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',

    span: {
      color: '$subtitle',
      lineHeight: '160%',
    },
  },
})
