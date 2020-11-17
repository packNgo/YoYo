import * as React from 'react'
import styled from 'styled-components'
import { Size ,Shape} from '../../enums'
import { IAvatarProps } from './../../models'
import { TypeAvatarProps } from '../../types'

const setSize = (size?: Size) => {
  switch (size) {
    case Size.xl:
      return `
        width: 55px;
        height:55px;
        `

    case Size.lg:
      return `
        width: 45px;
        height: 45px;
        `

    case Size.md:
      return `
        width: 40px;
        height:40px;
        `

    case Size.sm:
      return `
        width:35px;
        height:35px;
        `

    case Size.xs:
      return `
        width: 30px;
        height:30px;
        `

    default:
      return ` 
        width: 40px;
        height:40px;
        `
  }
}

const setShape =(shape?:Shape)=>{
  debugger
  switch(shape){
     case Shape.pentagon:
       return`
       clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
       `
     case Shape.hexagon:
       return`
       clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
       `
     case Shape.heptagon:
      return`
      clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
      `
     case Shape.octagon:
      return`
      clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
      `
      case Shape.nonagon:
      return`
      clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);
      `
      case Shape.decagon:
      return`
      clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%);
      `
      case Shape.bevel:
      return`
      clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
      `
      case Shape.star:
      return`
      clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 85% 100%, 50% 70%, 15% 100%, 32% 57%, 2% 35%, 39% 35%);
      `
      case Shape.rabbet:
      return`
      clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);
      `
      case Shape.ellipse:
      return`
      clip-path: ellipse(38% 50% at 50% 50%);
      `
      case Shape.circle:
      return`
      clip-path: circle(50% at 50% 50%);
      `
      case Shape.diamond:
      return`
      clip-path: polygon(0 30%, 30% 0, 70% 0, 100% 30%, 50% 100%);
      `
       default:
         return`
         clip-path: circle(50% at 50% 50%);
         `
    
  }
}

const setBackgroundImage = (src: string) => {
  return `
    background-position: center;
    background-size: cover;
    background-image: url('${src}')
    `
}

const SAvatar = styled.div<TypeAvatarProps>`
  ${(props) => setSize(props.size)};
  ${(props) => `background-color:${props.backgroundColor}`};
  ${(props) => setBackgroundImage(props.src)};
  ${(props)=> setShape(props.shape)};
`

const Avatar: React.FC<IAvatarProps> = ({
  size = Size.md,
  backgroundColor,
  src,
  shape ,
  
}) => {
  return (
    <SAvatar
      size={size}
      backgroundColor={backgroundColor}
      src={src}
      shape={shape}
    >
    </SAvatar>
  )
}

export default Avatar

