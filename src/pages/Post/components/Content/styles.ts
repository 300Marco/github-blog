import { styled } from '../../../../styles'

export const ContentContainer = styled('section', {
  width: '100%',
  maxWidth: '864px',
  padding: '2.5rem 2rem',
  lineHeight: '160%',

  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

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

  '@mobile': {
    padding: '2.5rem 0.75rem',
  },
})
