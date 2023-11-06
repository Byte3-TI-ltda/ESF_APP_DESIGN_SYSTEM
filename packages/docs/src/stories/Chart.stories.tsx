import type { Meta, StoryObj } from '@storybook/react'
import { Box, Chart, ChartProps, Text } from '@byte3-esf/react'

export default {
  title: 'Data display/Chart',
  component: Chart,
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="xl">Visualizações de perfil</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ChartProps>

export const Primary: StoryObj<ChartProps> = {}