import { Size } from '../enums'
import { Shape } from '../enums'

export interface IButtonProps {
  buttonType?: JSX.IntrinsicElements['button']['type']
  text: string
  disabled?: boolean
  size?: Size
  stretch?: boolean
  onClick?: () => void
  onKeyUp?: () => void
}
export interface IDividerProps {
  
  color?:string,
  width?:string,
  shape?: Shape
}