import { styled } from '../../styles'

export const ButtonBox = styled('button', {
  //   border: '1px solid red',

  lineHeight: 0,
  borderRadius: '8px',
  backgroundColor: '$blue',
  color: '$title',
  cursor: 'pointer',
  visibility: 'hidden',
  transition: 'all 100ms',
  padding: '12px 0',

  fontWeight: 700,

  position: 'fixed',
  bottom: '10px',
  right: '10px',

  svg: {
    transform: 'rotate(90deg)',
    visibility: 'hidden',
  },

  '&.scrolled': {
    visibility: 'visible',
    padding: '12px 12px',

    svg: {
      visibility: 'visible',
      //   width: 'initial',
      //   height: 'initial',
    },
  },
})
