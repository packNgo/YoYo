import { Size, Shape } from '../enums'

export interface IButtonProps {
  buttonType?: JSX.IntrinsicElements['button']['type']
  text: string
  disabled?: boolean
  size?: Size
  stretch?: boolean
  onClick?: () => void
  onKeyUp?: () => void
}


export interface IAvatarProps {
  size?: Size,
  src: string,
  alt?: string,
  backgroundColor?: string
  shape?: Shape
}