import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { IButtonProps } from './Button'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<IButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
  text: 'hello',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
  text: 'hello',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
  text: 'hello',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
  text: 'hello',
}
