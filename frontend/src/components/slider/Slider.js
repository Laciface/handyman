import transitions from '@material-ui/core/styles/transitions';
import React, {useState} from 'react';
import styled from 'styled-components';
import SliderContent from './SliderContent';

export default function Slider() {
    const getWidth = () => window.innerWidth
    const [state, setState] = useState({
        translate: 0,
        transition: 0.45
    })

    const {translate, transition} = state

    return (
        <SliderContainer>
                <SliderContent 
                    translate={translate}
                    transition={transition}
                    width={getWidth()}/>
        </SliderContainer>
    )
}

const SliderContainer = styled.div`
    position: relative;
    height: 87.7vh;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;
`