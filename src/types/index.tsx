import { IButtonProps , IAvatarProps } from './../models'

export type TypeButtonProps = Pick<IButtonProps, 'size' | 'stretch'>

export type TypeAvatarProps = Pick<IAvatarProps,'size'|'backgroundColor'|'src' |'shape'>