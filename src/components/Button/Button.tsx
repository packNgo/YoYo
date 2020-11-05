import * as React from 'react'

export interface IButtonProps {
  text: string
}

const Button: React.FC<IButtonProps> = (props) => {
  return <button>{props.text}</button>
}

export default Button
