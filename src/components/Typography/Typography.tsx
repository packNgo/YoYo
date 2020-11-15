import * as React from 'react';
import styled from 'styled-components';
import { ITypographyProps } from '../../models';
import { TypographyType } from '../../enums';
import { TypeTypographyProps } from '../../types';


const setTypographyType= (type: TypographyType) => {
    switch(type){
        case TypographyType.pageTitle:
            return `
            font-size: 112px;
            `;
        case TypographyType.pageSubtitle:
            return `
            font-size: 56px;
            `;
        case TypographyType.heading1:
            return `
            font-size: 45px;
            text-transform: uppercase;
            `;
        case TypographyType.heading2:
            return `
            font-size: 34px;
            text-transform: uppercase;
            `;
        case TypographyType.heading3:
            return `
            font-size: 24px;
            text-transform: uppercase;
            `;
        case TypographyType.body:
            return `
            font-size 16px;
            text-transform: capitalize;
            `;
        default: //Typography.caption
            return `
            font-size: 12px;
            font-style: italic;
            `;
    }
}

const STypography= styled.div<TypeTypographyProps>`
    ${(props) => setTypographyType(props.typographyType)};
    color: ${(props) => props.color};
    text-align: ${(props) => props.align};
    font-family: ${(props) => props.fontFamily};
    font-weight: ${(props) => props.weight};
`;

const Typography: React.FC<ITypographyProps>= ({
    text= 'Some text.',
    typographyType= TypographyType.caption,
    color= 'black',
    align= 'left',
    fontFamily= 'Helvetica, serif',
    weight= '300'
}) => {
    return(
    <STypography
    typographyType= {typographyType}
    color= {color} 
    align= {align}
    fontFamily= {fontFamily}
    weight= {weight}
    >
        {text}
    </STypography>
    );
};

export default Typography;