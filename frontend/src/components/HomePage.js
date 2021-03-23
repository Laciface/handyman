import React from 'react';
import Header from './layouts/Header';
import 'react-slideshow-image/dist/styles.css';
import Slideshow from './Slideshow';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <React.Fragment>
        <Slideshow/>
        <ButtonDiv>
            <DivContainer>
            <Link to='/Login'><Button variant="success">Login</Button></Link>
            </DivContainer>
            <Link to='/Registration'><Button variant="success">Register</Button></Link>
        </ButtonDiv>
        </React.Fragment>
    )
}

const ButtonDiv = styled.div`
    position: fixed;
    right: 900px;
    bottom: 500px;
    display: flex;
`

const DivContainer = styled.div`
    margin-right: 15px;
`