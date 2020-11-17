import { IButtonProps } from './../models'
import { IDividerProps } from './../models'

export type TypeButtonProps = Pick<IButtonProps, 'size' | 'stretch'>

export type TypeDividerProps = Pick<IDividerProps, 'shape'|'width'|'color'>