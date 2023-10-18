import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@byte3-esf/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
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
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
