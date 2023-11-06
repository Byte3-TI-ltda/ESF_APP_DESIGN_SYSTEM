import { styled } from '../../../styles'

export const StoryButtonContainer = styled('div', {
  position: 'relative',
  borderRadius: '$full',
  display: 'flex',
  width: '$16',
  height: '$16',
  overflow: 'hidden',
  border: 'double 3px transparent',
  backgroundOrigin: 'border-box',
  backgroundClip: 'content-box, border-box',
  backgroundImage: 'linear-gradient(black, black), linear-gradient(to bottom, #FFC800, #00E0FF)',
  alignItems: 'center',
  justifyContent: 'center',

  'span': {
    position: 'absolute',
    zIndex: 999,
    width: '$16',
    height: '$16',
  }
})

