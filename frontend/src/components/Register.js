import axios from 'axios';
import React, {useState} from 'react'
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Registration() {

    const [userEmail, setEmail] = useState('');
	const [userName, setName] = useState('');
	const [userPassword, setPassword] = useState('');
    const [userType, setType] = useState('');
    const [radioValue, setRadioValue] = useState('1');


    const radios = [
        { name: 'Worker', value: 'worker' },
        { name: 'Searcher', value: 'searcher' }
        ];

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};
    
    const handleTypeChange = (event) => {
		setType(event.target.value);
	};

    const register = (event)=> {
        event.preventDefault();
        axios.post("http://127.0.0.1:8000/api/register", {
            name: userName,
            email: userEmail,
            password: userPassword,
            type: userType
        })
    .then((response) => {
        console.log(response)
        window.location.href = '/'})
    .catch(function(error){
        alert(error)
    })

    }

    return (
        <BODY>
        <BOX>
            <form>
            <SPAN>registration</SPAN>
            <CONTAINER>
                <INPUT type="text" onChange={handleNameChange} placeholder="Enter name" name="name" required/>
                <LABEL for="name"></LABEL>
            </CONTAINER>
            <CONTAINER>
                <INPUT type="text" onChange={handleEmailChange} placeholder="Enter email" name="email" required/>
                <LABEL for="email"></LABEL>
            </CONTAINER>
            <CONTAINER>
                <INPUT type="password" onChange={handlePasswordChange} placeholder="Enter Password" name="password" required/>
                <LABEL for="psw"></LABEL>
            </CONTAINER>
            <CONTAINER>
                <ButtonGroup toggle>
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            type="radio"
                            variant="secondary"
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                            {radio.name}
                        </ToggleButton>
        ))}
                </ButtonGroup>
            </CONTAINER>
                <BUTTON type="submit"  onClick={register}>Submit</BUTTON>
            </form>
        </BOX>
        </BODY>
    )}
const BODY = styled.body`
	background-image: url('https://i2.wp.com/movingtips.wpengine.com/wp-content/uploads/2020/06/handyman.jpg?fit=1024%2C694&ssl=1');
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
