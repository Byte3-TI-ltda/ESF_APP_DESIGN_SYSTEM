import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray400',
  padding: '$3 $4',
  boxSizing: 'border-box',
  borderRadius: '$full',
  border: '2px solid $gray300',
  display: 'flex',
  alignItems: 'baseline',

  '&:has(input:focus), &:focus-within, &:focus': {
    borderColor: '$primary400',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray200',
  fontWeight: 'regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: 'regular',
  background: 'transparent',
  width: '100%',
  border: 0,

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray200',
  },
})
