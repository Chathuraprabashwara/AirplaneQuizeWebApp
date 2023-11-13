import React, { useState } from 'react';
import Modal from '../Components/Modal';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import Questions from '../Components/Questions';
import { IconButton } from '@mui/material';

function ModulePage() {
	const [open2, setOpen2] = useState(true);
  const data=[{
    id:1,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  },
  {
    id:2,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  }
]

	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					marginRight: '30px',
					marginLeft: '30px',
					backgroundColor: '#0A0B1E',
					marginTop: '10px',
					padding: '0px 10px',
					borderRadius: '10px',
				}}
			>
				<p style={{ color: '#BBE1FA' }}>Flight Planing and Monitoring</p>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-evenly',
						alignItems: 'center',
					}}
				>
					<p style={{ color: '#BBE1FA' }}>Total Questions - 10</p>
					<IconButton
						style={{ marginLeft: '10px', width: '45px', height: '45px' }}
					>
						<ChangeCircleOutlinedIcon
							onClick={() => setOpen2(true)}
							style={{ width: '30px', height: '30px', color: '#BBE1FA' }}
						/>
					</IconButton>
				</div>
			</div>
			<div
				style={{
       

				}}
			>
				<Questions data={data} />
			</div>
			<Modal
				open2={open2}
				setOpen2={setOpen2}
			/>
		</>
	);
}

export default ModulePage;
