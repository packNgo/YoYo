import * as React from 'react'
import styled from 'styled-components'
import { Size } from '../../enums'
import { IButtonProps } from './../../models'
import { TypeButtonProps } from '../../types'

const setSize = (size?: Size) => {
  switch (size) {
    case Size.xl:
      return `width:250px;
      hight:250px;
      padding: 10px 24px;
      border-radius: 12px;
      `

    case Size.lg:
      return `width:180px;
      hight:180px;
      padding: 10px 24px;
      border-radius: 12px;
      `

    case Size.md:
      return `width:120px;
      hight:120px;
      padding: 10px 24px;
      border-radius: 12px;
      `

    case Size.sm:
      return `width:80px;
      hight:800px;
      padding: 10px 24px;
      border-radius: 12px;
      `

    case Size.xs:
      return `width:50px;
      hight:50px;
      padding: 10px 24px;
      border-radius: 12px;
      `

    default:
      return `width:120px;
      hight:120px;
      padding: 10px 24px;
      border-radius: 12px;
      `
  }
}
const SButton = styled.button<TypeButtonProps>`
  ${(props) => setSize(props.size)};
  ${(props) => props.stretch && 'width: 100%'};
`

const Button: React.FC<IButtonProps> = ({
  onClick,
  onKeyUp,
  buttonType,
  size = Size.lg,
  disabled = false,
  text,
  stretch = false,
}) => {
  return (
    <SButton
      stretch={stretch}
      type={buttonType}
      onClick={onClick}
      onKeyUp={onKeyUp}
      size={size}
      disabled={disabled}
    >
      {text}
    </SButton>
  )
}

export default Button
