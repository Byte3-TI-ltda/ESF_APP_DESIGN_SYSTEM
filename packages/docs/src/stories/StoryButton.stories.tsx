import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, StoryButton, StoryButtonProps, Text } from '@byte3-esf/react'

export default {
  title: 'Data display/Story',
  component: StoryButton,
  args: {
    src: 'https://github.com/vitorhugoantunes.png',
    alt: 'Vitor Hugo Antunes',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<StoryButtonProps>

export const Primary: StoryObj<StoryButtonProps> = {}

export const WithoutUser: StoryObj<StoryButtonProps> = {
  args: {
    src: undefined,
  },
}
