import * as React from 'react';
import styled from 'styled-components';
import { ISubtitleProps } from './../../models'

const SSubtitle;

const Subtitle: React.FC<ISubtitleProps>= ({
    text
}) => {
    return(
    <SSubtitle>
        {text}
    </SSubtitle>
    );
};

export default Subtitle;