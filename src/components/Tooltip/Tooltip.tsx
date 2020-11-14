import * as React from 'react'
import styled from 'styled-components'
import { ITooltipProps } from './../../models'
import { TypeTooltipProps } from '../../types'
import { Position } from '../../enums'

const setPosition = (position?: Position) => {
  switch (position) {
    case Position.bottom:
      return `
      position:`     
    case Position.bottomStart:
      return `
      position:`     
    case Position.bottomEnd:
      return `
      position:`     
    case Position.top:
      return `
      position:`     
    case Position.topStart:
      return `
      position:`     
    case Position.topEnd:
      return `
      position:`     
    case Position.left:
      return `
      position:`     
    case Position.leftStart:
      return `
      position:`     
    case Position.leftEnd:
      return `
      position:`     
    case Position.right:
      return `
      position:`     
    case Position.rightStart:
      return `
      position:`     
    case Position.rightEnd:
      return `
      position:`     
  
    default:
      return `position:absolute`;
  }




const TooltipText = styled.div`
  background: rgba(28, 56, 151, 0.9);
  color: #fff;
  width: 200px;
  text-align: center;
  line-height: 44px;
  border-radius: 3px;
  cursor: pointer;
`
const TooltipBox = styled.div<TypeTooltipProps>`
  position: absolute;
  top: calc(100% + 10px);
  left: 30px;
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: 150px;
  padding: 5px 5px;
  border-radius: 4px;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
    padding 0.5s ease-in-out;
  &:before {
    content: '';
    width: 0;
    height: 0;
    left: 40px;
    top: -10px;
    position: absolute;
    border: 10px solid transparent;
    transform: rotate(135deg);
    transition: border 0.3s ease-in-out;
  }
`
const TooltipCard = styled.div`
  position: relative;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    width: 230px;
    padding: 8px 8px;
    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.8)
        rgba(0, 0, 0, 0.8);
    }
  }
`



const Tooltip: React.FC<ITooltipProps> = (
  {
position,
}
) => {
  return (
    <>
   

      <TooltipCard>
        <TooltipText>
          <h3>Hover</h3>
        </TooltipText>
        <TooltipBox position={position}>
          <p>First item</p>
          <p>Second item</p>
        </TooltipBox>
      </TooltipCard>
    </>
  )
}

export default Tooltip
