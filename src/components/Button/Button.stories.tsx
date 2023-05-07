import { Meta, StoryObj } from '@storybook/react'

import Button from '.'

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	args: {
		title: 'View Plans',
	},
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}
