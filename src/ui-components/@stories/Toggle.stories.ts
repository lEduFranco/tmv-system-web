import type { Meta, StoryObj } from '@storybook/react'

import { Example } from '@/ui-components/@stories/examples/Toogle'
import { ToggleButtonProps } from '@/ui-components/Form/Toogle'

const meta = {
  title: 'Components/Form/ToggleButton',
  component: Example,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<ToggleButtonProps>

export default meta

type Story = StoryObj<ToggleButtonProps>

export const Primary: Story = {
  args: {},
}
