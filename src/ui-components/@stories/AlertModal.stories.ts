import type { Meta, StoryObj } from '@storybook/react'
import { Example } from '@/ui-components/@stories/examples/AlertModal'
import { AlertModalProps } from '@/ui-components/AlertModal/index'

const meta = {
  title: 'Components/AlertModal',
  component: Example,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<AlertModalProps>

export default meta

type Story = StoryObj<AlertModalProps>

export const Primary: Story = {
  args: {},
}
