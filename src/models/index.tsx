import { Size, TypographyType } from '../enums'

export interface IButtonProps {
  buttonType?: JSX.IntrinsicElements['button']['type']
  text: string
  disabled?: boolean
  size?: Size
  stretch?: boolean
  onClick?: () => void
  onKeyUp?: () => void
}

export interface ITypographyProps{
  text: string;
  typographyType: TypographyType;
  color?: string;
  align?: 'center' | 'left' | 'right';
  fontFamily?: string;
  weight?: string;
}