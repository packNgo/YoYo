import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import '@storybook/addon-console';
import Subtitle from './Subtitle';
import { ISubtitleProps } from '../../models';

export default{
    title: 'Example/Subtitle',
    component: Subtitle
} as Meta;

const Template: Story<ISubtitleProps>= (args) => <Subtitle {...args} />;

export const TypographicSubtitle= Template.bind({});