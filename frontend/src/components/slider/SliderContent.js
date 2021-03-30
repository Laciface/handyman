import React from 'react'
// import styled from '@emotion/styled'
import styled from 'styled-components';


export default function SliderContent() {
    return (
        <React.Fragment>
            <SliderCont>
                Slider
            </SliderCont>
        </React.Fragment>
    )
}

const SliderCont = styled.div`
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s;
    height: 100%;
    width: ${props => props.width}px;
    display: flex;
    background: grey;
`