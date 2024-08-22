import type { Meta, StoryObj } from '@storybook/react'

import { Spinner } from '@/ui-components'
import { SpinnerProps } from '@/ui-components/Spinner'

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xsm', 'xlg', undefined],
      control: 'select',
    },
  },
} satisfies Meta<SpinnerProps>

export default meta

type Story = StoryObj<SpinnerProps>

export const Primary: Story = {
  args: {
    size: 'md',
  },
}
