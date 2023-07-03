import { styled } from '../../styles'

export const NotFoundContainer = styled('main', {
  width: '100%',
  height: '100vh',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '@mobile': {
    padding: '1rem 0.75rem',
  },
})

export const NotFoundContent = styled('section', {
  width: '100%',
  maxWidth: '590px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3.5rem',

  'h2, span, p': {
    lineHeight: '130%',
  },

  h2: {
    fontSize: '5rem',
    color: '$blue',
    fontWeight: '700',
  },

  'h2~p': {
    fontSize: '1.5rem',
    color: '$title',
    fontWeight: '700',
  },

  button: {
    fontSize: '1.125rem',
    borderRadius: '8px',
    fontWeight: '700',
    backgroundColor: '$blue',
    color: '$title',
    textTransform: 'uppercase',
    padding: '1rem 2rem',
    cursor: 'pointer',
    transition: 'background 300ms',

    '&:hover': {
      backgroundColor: '#2182E3',
    },
  },

  '@mobile': {
    textAlign: 'center',

    button: {
      fontSize: '0.75rem',
    },
  },
})

export const ReturnMessage = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  span: {
    color: '$blue',
    fontSize: '1.5rem',
    fontWeight: '700',
  },

  p: {
    lineHeight: '160%',
  },
})
