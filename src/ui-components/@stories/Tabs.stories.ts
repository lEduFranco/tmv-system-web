import type { Meta, StoryObj } from '@storybook/react'
import { Example } from '@/ui-components/@stories/examples/Tabs'

import { TabsProps } from '@/ui-components'

const meta = {
  title: 'Components/Tabs',
  component: Example,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<TabsProps>

export default meta

type Story = StoryObj<TabsProps>

export const Primary: Story = {
  args: {},
}
