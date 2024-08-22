import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/ui-components'
import { ButtonProps } from '@/ui-components/Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    typeColor: {
      options: [
        'disabled',
        'success',
        'primary',
        'error',
        'alert',
        'blank',
        undefined,
      ],
      control: 'select',
    },
    disabled: {
      type: 'boolean',
    },
    block: {
      type: 'boolean',
    },
    isLoading: {
      type: 'boolean',
    },
    size: {
      options: ['sm', 'md'],
      control: 'select',
    },
  },
} satisfies Meta<ButtonProps>

export default meta

type Story = StoryObj<ButtonProps>

export const Primary: Story = {
  args: {
    block: false,
    size: 'md',
    typeColor: 'primary',
    disabled: false,
    isLoading: false,
    loadingMessage: 'Entrando...',
    children: 'Entrar',
  },
}
