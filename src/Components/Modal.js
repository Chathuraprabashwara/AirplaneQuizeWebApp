import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';

import { useNavigate } from 'react-router-dom';
import "./modal.css";


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


export default function BasicModal() {
	const navigate = useNavigate();
	const [open, setOpen] = React.useState(true);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleCloseButton = () => {
		navigate("/home");
		handleClose();
	}


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

					<div className='ModalBox'>
						{questionCount.map((val, index) => (
							<div key={index} className='QuestionNButton'>
								<p>{val} Questions</p>
							</div>
						))}
						<div style={{display:'flex',justifyContent:'center',alignItems:'center', marginTop:'20px'}}>
                            <button onClick={handleCloseButton} className='CloseButton'>Close</button>
                        </div>

					</div>
				</Box>
			</Modal>
		</div>
	);
}
