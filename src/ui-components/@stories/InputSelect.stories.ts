import type { Meta, StoryObj } from '@storybook/react'

import { Example } from './examples/InputSelect'

const meta = {
  title: 'Components/InputSelect',
  component: Example,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Example>

export default meta

type Story = StoryObj<typeof Example>

export const Primary: Story = {
  args: {},
}
