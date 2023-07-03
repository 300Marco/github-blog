import { keyframes, styled } from '../../../../styles'

const contentAnimation = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-50px)',
  },

  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

export const ContentContainer = styled('section', {
  width: '100%',
  maxWidth: '864px',
  padding: '2.5rem 2rem',
  lineHeight: '160%',

  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  animation: `${contentAnimation} 300ms ease-out 700ms`,
  animationFillMode: 'both',

  pre: {
    width: '100%',

    backgroundColor: '$post',
    padding: '1rem',
    borderRadius: '8px',
    overflow: 'hidden',
  },

  code: {
    color: 'yellow',
    width: '100%',
    wordBreak: 'break-word',
  },

  'pre>code': {
    color: '$text',
  },

  a: {
    color: '$blue',
    fontWeight: '700',
  },

  li: {
    listStyle: 'initial',
    marginLeft: '1rem',
  },

  img: {
    width: '100%',
  },

  '@mobile': {
    padding: '2.5rem 0.75rem',
  },
})
