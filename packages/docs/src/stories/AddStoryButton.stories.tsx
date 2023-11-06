import type { Meta, StoryObj } from '@storybook/react'
import { AddStoryButton, AddStoryButtonProps } from '@byte3-esf/react'

export default {
  title: 'Data display/Add Story',
  component: AddStoryButton,
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AddStoryButtonProps>

export const Primary: StoryObj<AddStoryButtonProps> = {}
