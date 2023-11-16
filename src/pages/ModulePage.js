import React, { useState } from 'react';
import Modal from '../Components/Modal';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import Questions from '../Components/Questions';
import { IconButton } from '@mui/material';

function ModulePage() {
	const [open2, setOpen2] = useState(true);
  const [qCount,setQCount] = useState(0); 
  
  const data=[{
    id:1,
    question:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has...",
    answers:["answer1","answer2","answer3" ,"answer4"],
    image:true,
    url:'https://flyingmag.sfo3.digitaloceanspaces.com/flyingma/wp-content/uploads/2022/06/23090933/AdobeStock_249454423-scaled.jpeg'
  },
  {
    id:2,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  },
  {
    id:3,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  },
  {
    id:4,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  },
  {
    id:5,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  },
  {
    id:6,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  },
  {
    id:7,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  },
  {
    id:8,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  },
  {
    id:9,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  },
  {
    id:10,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  },
  {
    id:11,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  },
  {
    id:12,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  },
  {
    id:13,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  },
  {
    id:14,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  },
  {
    id:15,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  },
  {
    id:16,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  },
  {
    id:17,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  },
  {
    id:18,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  },
  {
    id:19,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  },
  {
    id:20,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  },
  {
    id:21,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  },
  {
    id:22,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  },
  {
    id:23,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  },
  {
    id:24,
    question:"what is the name of ...",
    answers:["answer1","answer2","answer3" ,"answer4"]
  },
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
					<p style={{ color: '#BBE1FA' }}>Total Questions - {qCount}</p>
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
				<Questions data={qCount !==0 ?data.slice(0,qCount) : []} />
			</div>
			<Modal
				open2={open2}
				setOpen2={setOpen2}
        setQCount={setQCount}
			/>
		</>
	);
}

export default ModulePage;
