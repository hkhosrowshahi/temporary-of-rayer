import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {CreateElection} from '../../services/electionServices';

const Election = () => {
	const [name, setName] = useState('');
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [numberOfCandidate, setNumberOfCondidate] = useState('');
	const [numberOfVotePerUser, setNumberOfVotePerUser] = useState('');
	const [disableSwitch, setDisableSwitch] = useState('');
	const [openVote, setOpenVote] = useState('');


	const nameHandler = (e) => {
		setName(e.target.value);
	};
	const startDateHandler = (e) => {
		setStartDate(e.target.value);
	};

	const endDateHandler = (e) => {
		setEndDate(e.target.value);
	};

	const numberOfCandidateHandler = (e) => {
		setNumberOfCondidate(e.target.value);
	};

	const numberOfVotePerUserHandler = (e) => {
		setNumberOfVotePerUser(e.target.value)
	};

	const disableSwitchHandler = (e) => {
		setDisableSwitch(e.target.value);
	};

	const openVoteHandler = (e) => {
		setOpenVote(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const electionData = {
			name: name,
			startDate: startDate,
			endDate: endDate,
			numberOfCandidate: numberOfCandidate,
			numberOfVotePerUser: numberOfVotePerUser,
			disableSwitch: disableSwitch,
			openVote: openVote,
		};

		const response = async () => {
			const result = await CreateElection(electionData);
			if (result.stateCode === 'Seccess') {
				alert('Create Election Successfully');
			} else
			{
				alert(result.message);
			}
		};
		response().catch(console.error);
	};

	return (
		<React.Fragment>
			<Form className='d-grid gap-2' onSubmit={submitHandler}>
				<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
					<Form.Label className='d-flex'>نام انتخابات</Form.Label>
					<Form.Control type='text' onChange={nameHandler} />
				</Form.Group>
				<Form.Group>
					<Form.Label className='d-flex'>تاریخ برگزاری</Form.Label>
					<input type='date' onChange={startDateHandler} />
				</Form.Group>
				<Form.Group>
					<Form.Label className='d-flex'>تعداد کاندیداها</Form.Label>
					<Form.Control
						size='sm'
						type='number'
						onChange={numberOfCandidateHandler}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label className='d-flex'>تعداد رأی برای هر کاربر</Form.Label>
					<Form.Control
						size='sm'
						type='number'
						onChange={numberOfVotePerUserHandler}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label className='d-flex'>تاریخ پایان</Form.Label>
					<input type='date' onChange={endDateHandler} />
				</Form.Group>
				<Form.Group className='d-grid gap-2' />
				<Link to='/home'>
					<Button variant='outline-primary'>تعیین کاندیداها</Button>
				</Link>
				<Link to='/home'>
					<Button variant='outline-primary'>تعیین افراد رأی دهنده</Button>
				</Link>
				<Link to='/home'>
					<Button variant='outline-primary'>تعیین ناظر انتخابات</Button>
				</Link>
				<Form.Group />
				<Form.Check // prettier-ignore
					onChange={disableSwitchHandler}
					type='switch'
					id='custom-switch'
					label='غیرفعال'
				/>
				<Form.Check // prettier-ignore
					onChange={openVoteHandler}
					type='switch'
					id='custom-switch'
					label='رأی آشکار'
				/>
				<Button type='submit' className='m-1'>
					ثبت کردن
				</Button>
			</Form>
			<Form className='d-flex justify-content-end'>
			</Form>
		</React.Fragment>
	);
};

export default Election;
