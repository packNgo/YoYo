import { Size } from '../enums'

export interface IButtonProps {
  text: string
  disabled?: boolean
  size?: Size
  onClick?: { actions: { argTypesRegex: '^on.*' } }
}
