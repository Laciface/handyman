import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export default function Header() {

	return (
        <HeaderSytle>
            <DIV>
            <DIV2>
            <Link to="/"><img src="https://cdn4.vectorstock.com/i/thumb-large/70/28/thin-line-wrench-and-gear-like-repair-service-logo-vector-17487028.jpg" alt="logo" height="100" width="100"/></Link>
            </DIV2>
			<DIV3>
                <H1>HandyMan</H1>
            </DIV3>
            </DIV>
		</HeaderSytle>
    )
}


const DIV = styled.div`
    position: relative;
    display: flex;
`

const DIV2 = styled.div`
    float:left;
    position: relative;
    `

const DIV3 = styled.div`
margin-top:20px;
margin-left:10px;
display: block;
position: relative;
`

const HeaderSytle = styled.header`
	background: #26272b;
    color: black;
    text-align: center;
    padding: 10px;
` 

const H1 = styled.h1`
	font-weight: 800;
    color: white;
    text-decoration: none;
    font-size: 40px;
`