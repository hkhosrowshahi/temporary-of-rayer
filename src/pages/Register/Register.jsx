import React, { Fragment, useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import maincover from '../../assets/maincover.svg';
import { LayoutSidebarInset, Pass } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { registerService } from '../../services/userServices';

const Register = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [nationalCode, setNationalCode] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [password, setPassword] = useState('');
	const [reEnterPassword, setReEnterPassw0rd] = useState('');

	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();

		const userData = {
			firstName: firstName,
			lastName: lastName,
			nationalCode: nationalCode,
			phoneNumber: phoneNumber,
			password: password,
		};
		if (password === reEnterPassword) {
			const response = async () => {
				const result = await registerService(userData);
				if (result.statusCode === 'Success') {
					navigate('/otp', { state: { phoneNumber: phoneNumber } });
				} else {
					alert(result.message);
				}
			};
			response().catch(console.error);
		} else {
			alert('رمز عبور و تکرار آن با هم یکسان نیستند');
		}
	};

	return (
		<Form onSubmit={submitHandler}>
			<Container>
				<Row className='px-4 my-5'>
					<Col xs={12} md={8} sm={4}>
						<Row>
							<Col className='rounded'>
								<Form.Label>نام</Form.Label>
								<Form.Control
									onChange={(e) => setFirstName(e.target.value)}
									value={firstName}
									size='sm'
									type='text'
									xs={1}
								/>
							</Col>
							<Col>
								<Form.Label>نام خانوادگی</Form.Label>
								<Form.Control
									onChange={(e) => setLastName(e.target.value)}
									value={lastName}
									size='sm'
									type='text'
									xs={3}
								/>
							</Col>
						</Row>
					</Col>
					<Col xs={12} md={8} sm={4}>
						<Row>
							<Col className='rounded'>
								<Form.Label>کد ملی</Form.Label>
								<Form.Control
									onChange={(e) => setNationalCode(e.target.value)}
									value={nationalCode}
									size='sm'
									type='text'
									xs={1}
								/>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Label>شماره موبایل</Form.Label>
								<Form.Control
									onChange={(e) => setPhoneNumber(e.target.value)}
									value={phoneNumber}
									size='sm'
									type='text'
									xs={3}
								/>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Label>رمز عبور</Form.Label>
								<Form.Control
									onChange={(e) => setPassword(e.target.value)}
									value={password}
									size='sm'
									type='password'
									xs={3}
								/>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Label>تکرار رمز عبور</Form.Label>
								<Form.Control
									onChange={(e) => setReEnterPassw0rd(e.target.value)}
									value={reEnterPassword}
									size='sm'
									type='password'
									xs={3}
								/>
							</Col>
						</Row>
					</Col>
					<Col xs={6} md={4} sm={4}>
						<Image src={maincover} fluid className='' />
					</Col>
				</Row>
				<Button variant='outline-primary' type='submit'>
					ثبت
				</Button>
			</Container>
		</Form>
	);
};
export default Register;
