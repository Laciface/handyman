import React from 'react';
import Navbar from '../components/layouts/Navbar';
import Footer from './layouts/Footer';
import styled from 'styled-components';

export default function UserInterface() {
    return (
        <div>
            <Navbar/>
            <DIV>
                <div style={{ height: '580px'}}>
                    <h3>Szia <span>{sessionStorage.getItem('username')}!</span></h3>
                    <h3>kutyáidat sétáltatod?</h3>
                </div>
            </DIV>
            <Footer/>
        </div>
    )
}

const DIV = styled.div`
    background-image: url("https://myhome.co.uk/wp-content/uploads/2019/07/handyman-services-london.jpg");
    background-repeat:'no-repeat';
    background-size: 'cover';
    height : '800px';
`