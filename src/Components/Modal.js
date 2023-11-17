import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import './modal.css';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: '#3F416D',
	border: '2px solid #000',
	boxShadow: 24,
	p: 2,
	borderRadius: 2,
	display:'flex',
	flexDirection: 'column'
};

export default function BasicModal({setOpen2,open2}) {
	// const handleOpen = () => {setOpen2(true)};
	const handleClose = () => setOpen2(false);
console.log(open2)
	const questionCount = [10, 20, 30, 40, 50];

	return (
		<div>
			<Modal
				open={open2}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				disableBackdropClick
			>
				<Box sx={style}>
				<h4>Flight Planing and Monitoring</h4>

					<div className="container">
						{questionCount.map((val, index) => (
							<div
								key={index}
								className="questionContainer"
							>
								<p>{val} Questions</p>
							</div>
						))}
						<div className="buttonContainer">
							<button onClick={()=>{handleClose()}} className="closeButton">Close</button>
						</div>
					</div>
				</Box>
			</Modal>
		</div>
	);
}
