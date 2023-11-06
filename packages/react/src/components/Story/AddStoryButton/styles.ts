import { styled } from '../../../styles'

export const AddStoryButtonContainer = styled('button', {
  borderRadius: '$full',
  display: 'flex',
  width: '$16',
  height: '$16',
  overflow: 'hidden',
  background: '$gray300',
  border: '1px solid $gray200',

  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  'svg': {
    color: '$gray100'
  }
})

