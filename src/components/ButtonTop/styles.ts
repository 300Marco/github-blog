import { styled } from '../../styles'

export const ButtonBox = styled('button', {
  lineHeight: 0,
  fontWeight: 700,
  backgroundColor: '$blue',
  color: '$title',
  cursor: 'pointer',
  borderRadius: '8px',
  border: '1px solid transparent',
  padding: '12px 12px',
  transition: 'transform 300ms, border 300ms',
  transform: 'translateY(52px)',

  position: 'fixed',
  bottom: '10px',
  right: '10px',

  svg: {
    transform: 'rotate(90deg)',
  },

  '&:hover': {
    border: '1px solid #fff',
  },

  '&.scrolled': {
    transform: 'translateY(0)',
  },
})
