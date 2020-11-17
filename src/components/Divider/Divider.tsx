import * as React from 'react'
import styled from 'styled-components'
import { Shape } from '../../enums'
import { IDividerProps } from './../../models'
import { TypeDividerProps } from '../../types'

const setShape = (shape?: Shape) => {
  switch (shape) {
    case Shape.dashed:
      return `  border-top: 3px dashed ;
      `
    case Shape.dotted:
      return `border-top: 3px dotted ;
      `
    case Shape.solid:
      return ` border-top: 3px solid ;
      `
    case Shape.rounded:
      return ` border-top:  solid   ;
      border-radius: 5px;
     
      `
    default:
      return ` border-top: 3px solid ;
      `
  }
}
const SDivider = styled.div<TypeDividerProps>`
  ${(props) => setShape(props.shape)};
  ${(props) => `color:${props.color}`};
  ${(props) => `width:${props.width}`};
  ${(props) => `border-top:${props.bordertop}`};

`
const Divider: React.FC<IDividerProps> = ({
  shape = Shape.solid,
  color,
  width,
  
  
}) => {
  return (
    <SDivider
      color={color}
      shape={shape}
      width={width}
   
     
    >

    </SDivider>
  )
}

export default Divider
