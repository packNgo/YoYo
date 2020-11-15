import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import '@storybook/addon-console';
import Typography from './Typography';
import { ITypographyProps } from '../../models';
import { TypographyType } from '../../enums';

export default{
    title: 'Example/Typography',
    component: Typography
} as Meta;

const Template: Story<ITypographyProps>= (args) => <Typography {...args} />;

export const PageTitle= Template.bind({});
PageTitle.args={
    text: 'Page title',
    typographyType: TypographyType.pageTitle
}

export const PageSubtitle= Template.bind({});
PageSubtitle.args={
    text: 'Page subtitle',
    typographyType: TypographyType.pageSubtitle,
    color: 'salmon'
}

export const Heading1= Template.bind({});
Heading1.args={
    text: 'heading 1',
    typographyType: TypographyType.heading1
}

export const Heading2= Template.bind({});
Heading2.args={
    text: 'heading 2',
    typographyType: TypographyType.heading2,
    color: '#800020'
}

export const Heading3= Template.bind({});
Heading3.args={
    text: 'heading 3',
    typographyType: TypographyType.heading3
}

export const body= Template.bind({});
body.args={
    text: 'body',
    typographyType: TypographyType.body
}

export const caption= Template.bind({});
caption.args={
    text: 'caption',
    typographyType: TypographyType.caption,
    color: '#808080'
}