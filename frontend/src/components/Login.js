import React, {useState} from 'react'
import axios from 'axios';
import styled from 'styled-components';

export default function Login() {
    const [userEmail, setEmail] = useState('');
	const [userPassword, setPassword] = useState('');

    const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

    
    const login = (event) => {
        event.preventDefault();
        axios.post("http://127.0.0.1:8000/api/login", {
            email: userEmail,
            password: userPassword
        })
        .then((response) => {
            console.log(response);
            sessionStorage.setItem('token', response.data.token );
            sessionStorage.setItem('username', response.data.name );
            window.location.href = '/';
        })
        .catch(function (error) {
            alert(error)
        });
    }

    return (
        <BODY>
        <BOX>
            <form>
            <SPAN>login</SPAN>
            <CONTAINER>
                <INPUT type="text" onChange={handleEmailChange} placeholder="Enter email" name="email" required/>
                <LABEL for="psw-repeat"></LABEL>
            </CONTAINER>
            <CONTAINER>
                <INPUT type="password" onChange={handlePasswordChange} placeholder="Enter Password" name="password" required/>
                <LABEL for="psw"></LABEL>
            </CONTAINER>
                <BUTTON type="submit" onClick={login}>Submit</BUTTON>
            </form>
        </BOX>
        </BODY>
    )
}


const BODY = styled.body`
	background-image: url('https://m.blog.hu/mr/mrfoster/image/50529468_l.jpg');
	background-position: center;
    background-origin: content-box;
    background-repeat: no-repeat;
    background-size: cover;
	min-height:78.7vh;
	font-family: 'Noto Sans', sans-serif;
`


const BUTTON = styled.button`
    color:#fff;
	background-color:#e74c3c;
	outline: none;
    border: 0;
    color: #fff;
	padding:10px 20px;
	text-transform:uppercase;
	margin-top:50px;
	border-radius:2px;
	cursor:pointer;
	position:relative;
`


const INPUT = styled.input`
    border:0;
    border-bottom:1px solid #555;  
    background:transparent;
    width:100%;
    padding:8px 0 5px 0;
    font-size:16px;
    color:#fff;
    &:focus{border:none;	
            outline:none;
            border-bottom:1px solid #e74c3c;}
    &:valid ~ label{
	top:-12px;
	font-size:12px;
}
`

const LABEL = styled.label`
    position:absolute;
	top:0px;
	left:0px;
	font-size:16px;
	color:#fff;	
    pointer-event:none;
	transition: all 0.5s ease-in-out;
`

const CONTAINER = styled.div`
    position:relative;
	margin-bottom:25px;
`


const BOX = styled.div`
    position:absolute;
	left:50%;
	top:50%;
	transform: translate(-50%,-50%);
    background-color: rgba(0, 0, 0, 0.89);
	border-radius:3px;
	padding:70px 100px;
`


const SPAN = styled.span`
    color:#fff;	
	text-transform:uppercase;
    font-size: 23px;
    margin: -50px 0 80px 0;
    display: block;
    text-align: center;
`


