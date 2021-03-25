import React from 'react';
import Header from './layouts/Header';
import 'react-slideshow-image/dist/styles.css';
import Slideshow from './Slideshow';
import Carousel from './Carousel';
import styled from 'styled-components';
// import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Footer from './layouts/Footer';
import {Button} from '@material-ui/core';
import ButtonBases from './Buttons';


export default function HomePage() {
    return (
        <React.Fragment>
        <ButtonBases/>
        {/* {hasToken()} */}
        <Footer/>
        </React.Fragment>
    )
}

const hasToken = () => {
    console.log(sessionStorage.length)
    if(sessionStorage.length == 0)
    {
        return(
        <ButtonDiv>
            <DivContainer>
            <Link to='/Login'><Button>Login</Button></Link>
            </DivContainer>
            <Link to='/Registration'><Button>Register</Button></Link>
        </ButtonDiv>
        )
    }
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