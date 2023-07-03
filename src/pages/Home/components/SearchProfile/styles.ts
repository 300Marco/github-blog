import { keyframes, styled } from '../../../../styles'

const searchAnimation = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-50px)',
  },

  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

export const SearchContainer = styled('section', {
  width: '100%',
  maxWidth: '864px',
  marginTop: '4.5rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',

  animation: `${searchAnimation} 300ms ease-out 700ms`,
  animationFillMode: 'both',

  input: {
    width: '100%',
    backgroundColor: '$input',
    borderRadius: '6px',
    padding: '0.75rem 1rem',
    border: '1px solid $border',
    transition: 'border 300ms',

    '&::placeholder': {
      color: '$label',
    },

    '&:hover': {
      border: '1px solid $label',
    },
  },
})

export const SearchHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  h2: {
    color: '$subtitle',
    fontSize: '1.125rem',
    fontWeight: 700,
    lineHeight: '160%',
  },

  span: {
    color: '$span',
    fontSize: '0.875rem',
    lineHeight: '160%',
  },
})
