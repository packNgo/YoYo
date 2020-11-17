import * as React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Avatar from './Avatar'
import { IAvatarProps } from '../../models'
import '@storybook/addon-console'

export default {
  title: 'Example/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },

  },
} as Meta

const Template: Story<IAvatarProps> = (args) => <Avatar {...args} />

export const xlargeAvatar = Template.bind({})
xlargeAvatar.args = {
  src:"https://www.itu.cet.ac.il/uploads/2017/08/default-avatar-1.jpg",
  size: 'xl',
}

export const largeAvatar = Template.bind({})
largeAvatar.args = {
  src:"https://www.itu.cet.ac.il/uploads/2017/08/default-avatar-1.jpg",
    size: 'lg',

}

export const midAvatar = Template.bind({})
midAvatar.args = {
  src:"https://www.itu.cet.ac.il/uploads/2017/08/default-avatar-1.jpg",
    size: 'md',
}

export const smAvatar = Template.bind({})
smAvatar.args = {
  src:"https://www.itu.cet.ac.il/uploads/2017/08/default-avatar-1.jpg",
    size: 'sm',
}

export const xsAvatar = Template.bind({})
xsAvatar.args = {
  src:"https://www.itu.cet.ac.il/uploads/2017/08/default-avatar-1.jpg",
    size: 'xs',
}
