import { IButtonProps, ITypographyProps } from './../models';

export type TypeButtonProps = Pick<IButtonProps, 'size' | 'stretch'>

export type TypeTypographyProps = Pick<ITypographyProps, 'typographyType' | 'color' | 'align' | 'fontFamily'>