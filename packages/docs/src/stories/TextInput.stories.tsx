import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@byte3-esf/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {
    variant: 'primary',
  },
  variant: {
    options: ['primary', 'secondary'],
    control: {
      type: 'inline-radio',
    },
  },
  // Decorators serve para adicionar por volta um elemento pai onde nosso story de input fica dentro
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Input Label</Text>
          {/* Funcao Story que retrona nosso story atual de Text Input */}
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Digite seu nome...',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'www.site.com.br/',
  },
}
