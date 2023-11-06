import { styled } from "../../styles";

export const ChartContainer = styled('div', {
  fontFamily: 'Public sans, sans-serif',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  width: '100%',
  border: '1px solid var(--gray-200)',
  borderRadius: '6px',
  padding: '0.5rem',

  '.chart': {
    height: '26em !important',

    '.tooltip': {
      background: 'var(--gray-200) !important',
      borderRadius: '6px',
    },

    '@media screen and (max-width: 1120px)': {
      width: '100% !important',
      height: '15rem !important',
    }
  }
})