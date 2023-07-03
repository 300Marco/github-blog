import { keyframes, styled } from '../../../../styles'

const postsAnimation = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-50px)',
  },

  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

export const PostsContainer = styled('section', {
  width: '100%',
  maxWidth: '864px',
  marginTop: '3rem',

  animation: `${postsAnimation} 300ms ease-out 900ms`,
  animationFillMode: 'both',
})

export const Cards = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, 416px)',
  gap: '2rem',

  a: {
    display: 'block',
    color: '$blue',
    fontWeight: '700',
  },

  '@mobile': {
    gridTemplateColumns: 'initial',
    justifyContent: 'center',
  },

  '@tablet': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
})

export const Card = styled('div', {
  height: '100%',
  backgroundColor: '$post',
  borderRadius: '10px',
  padding: '2rem',
  border: '2px solid transparent',
  cursor: 'pointer',
  transition: 'border 300ms',

  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',

  '&:hover': {
    border: '2px solid $label',
  },

  header: {
    h2: {
      flex: 1,
      color: '$title',
      fontSize: '1.25rem',
      lineHeight: '160%',
      fontWeight: 700,
    },

    span: {
      color: '$span',
      fontSize: '0.875rem',
      lineHeight: '160%',
    },

    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
  },

  p: {
    lineHeight: '160%',
    color: '$text',
  },

  '@mobile': {
    padding: '2rem 0.75rem',

    width: '100%',
    maxWidth: '416px',
  },
})
