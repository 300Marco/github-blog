import { createStitches } from '@stitches/react'

export const { styled, theme, globalCss, keyframes } = createStitches({
  theme: {
    colors: {
      input: '#040f1a',
      background: '#071421',
      profile: '#0a1b2b',
      post: '#112130',
      border: '#1b2e41',
      label: '#3a526b',

      span: '#7b96b1',
      text: '#afc1d4',
      subtitle: '#c4d3e3',
      title: '#e6edf3',

      blue: '#3194f7',
    },
  },
  media: {
    mobileS: '(min-width: 200px) and (max-width: 413px)',
    mobile: '(min-width: 200px) and (max-width: 767px)',
    tablet: '(min-width: 768px) and (max-width: 1023px)',
    laptop: '(min-width: 1024px) and (max-width: 1439px)',
  },
})
