import type { Meta, StoryObj } from '@storybook/react'

import { DividerProps } from '@/ui-components'
import { Example } from '@/ui-components/@stories/examples/Divider'

const meta = {
  title: 'Components/Divider',
  component: Example,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<DividerProps>

export default meta

type Story = StoryObj<DividerProps>

export const Primary: Story = {
  args: {},
}
