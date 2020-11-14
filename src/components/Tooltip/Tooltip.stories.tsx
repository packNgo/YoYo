import * as React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Tooltip from './Tooltip'
import { ITooltipProps } from '../../models'
import '@storybook/addon-console'

export default {
  title: 'Example/Tooltip',
  component: Tooltip,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ITooltipProps> = (args) => <Tooltip {...args} />

export const Bottom = Template.bind({})
Bottom.args = {
  text: 'disabled!',
  disabled: false,
  size: 'lg',
}

