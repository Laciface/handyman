import React from 'react';
import Navbar from '../components/layouts/Navbar';
import Footer from './layouts/Footer';
import styled from 'styled-components';

export default function UserInterface() {
    return (
        <div>
            <Navbar/>
            <DIV>
                <div style={{ height: '580px', backgroundColor : '#e1f5fe'}}>
                    <h3>Welcome <span>{sessionStorage.getItem('username')}!</span></h3>
                </div>
            </DIV>
            <Footer/>
        </div>
    )
}

const DIV = styled.div`
    background-color: 'blue';
    /* background-image: url("https://myhome.co.uk/wp-content/uploads/2019/07/handyman-services-london.jpg"); */
    background-repeat:'no-repeat';
    background-size: 'cover';
    height : '800px';
`