import { Size } from '../enums'
import { Position } from '../enums'

export interface IButtonProps {
  buttonType?: JSX.IntrinsicElements['button']['type']
  text: string
  disabled?: boolean
  size?: Size
  // stretch?: boolean
  onClick?: () => void
}
export interface ITooltipProps {
  position?: Position
}
