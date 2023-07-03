import { styled } from '../../styles'

export const PostContainer = styled('main', {
  paddingBottom: '6rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '@mobile': {
    padding: '0 0.75rem 6rem',
  },

  '@tablet': {
    padding: '0 1rem 6rem',
  },
})
