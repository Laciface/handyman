import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './layouts/Navbar';
import styled from 'styled-components';
import axios from 'axios';
import { LaptopWindows } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
}));

const Container = styled.div`
	flex-direction: column;
	margin-top: 50px;
`;

const Div = styled.div`
	margin-bottom: 25px;
`;

export default function CVForm() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [district, setDistrict] = useState('');
	const [specialization, setSpecialization] = useState('');

	const classes = useStyles();

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handlePhoneChange = (event) => {
		setPhone(event.target.value);
	};

	const handleDistrictChange = (event) => {
		setDistrict(event.target.value);
	};

	const handleSpecializationChange = (event) => {
		setSpecialization(event.target.value);
	};

	let config = {
		headers: {
			Authorization: 'Bearer ' + sessionStorage.getItem('token'),
		},
	};

	const handleCVRegistration = (event) => {
		axios
			.post(
				'http://127.0.0.1:8000/api/worker',
				{
					email: email,
					name: name,
					specialization: specialization,
					phone_number: phone,
					district: district,
				},
				config
			)
			.then((response) => {
				console.log(response);
				window.location.href = '/UserInterface';
			})
			.catch(function (error) {
				alert(error);
			});
	};

	return (
		<React.Fragment>
			<Navbar />
			<form
				className={classes.root}
				noValidate
				autoComplete='off'
				onSubmit={handleCVRegistration}
			>
				<Container>
					<Div>
						<TextField
							onChange={handleNameChange}
							required
							id='outlined-required'
							label='Full Name'
							variant='outlined'
						/>
					</Div>
					<Div>
						<TextField
							onClick={handleEmailChange}
							required
							id='outlined-required'
							label='Required'
							value={sessionStorage.getItem('email')}
							variant='outlined'
						/>
					</Div>
					<Div>
						<TextField
							onChange={handleSpecializationChange}
							required
							id='outlined-required'
							label='Specialization'
							variant='outlined'
						/>
					</Div>
					<Div>
						<TextField
							onChange={handleDistrictChange}
							required
							id='outlined-required'
							placeholder='District'
							variant='outlined'
						/>
					</Div>
					<Div>
						<TextField
							onChange={handlePhoneChange}
							id='outlined-number'
							placeholder='Number'
							type='number'
							InputLabelProps={{
								shrink: true,
							}}
							variant='outlined'
						/>
					</Div>
				</Container>
				<Button type='submit' variant='outlined' color='primary'>
					Submit
				</Button>
			</form>
		</React.Fragment>
	);
}
