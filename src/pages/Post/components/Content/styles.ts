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
    backgroundColor: '$post',
    padding: '1rem',
    borderRadius: '8px',
    // margin: '1rem 0',
  },

  code: {
    color: 'yellow',
  },

  'pre>code': {
    color: '$text',
  },

  a: {
    color: '$blue',
    fontWeight: '700',
  },

  'h2, h3, h4': {
    // marginTop: '2rem',
  },

  p: {
    // margin: '1rem 0',
  },

  li: {
    listStyle: 'initial',
    marginLeft: '1rem',
  },
})
