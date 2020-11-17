import * as React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Divider from './Divider'
import { IDividerProps } from '../../models'
import '@storybook/addon-console'

export default {
  title: 'Divider',
  component: Divider,
  argTypes: {
  color: { control: 'color' },
  
  },
} as Meta

const Template: Story<IDividerProps> = (args) => <Divider {...args} />

 export const Solid = Template.bind({})
 Solid.args = {
  text: 'Solid',
  shape:"solid",
 }

export const Dashed = Template.bind({})
Dashed.args = {
  shape:"dashed",
  text: 'Dashed'
}

export const Dotted = Template.bind({})
Dotted.args = {
  text: 'Dotted',
  shape:"dotted",
}

export const Rounded = Template.bind({})
Rounded.args = {
 
  text: 'Rounded',
  shape:"rounded",
}

// export const Small = Template.bind({})
// Small.args = {
//   size: 'small',
//   label: 'Button',
//   text: 'hello',
// }
