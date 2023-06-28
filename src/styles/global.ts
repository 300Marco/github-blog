import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: 'none',
    boxSizing: 'border-box',
    textDecoration: 'none',
    listStyle: 'none',
  },

  ':focus': {
    outline: 0,
    boxShadow: `0 0 0 1px #3194f7`,
  },

  body: {
    backgroundColor: '$background',
  },

  'body, input, textarea, button': {
    fontFamily: "'Nunito', sans-serif",
    fontSize: '1rem',
    color: '$text',
  },
})
