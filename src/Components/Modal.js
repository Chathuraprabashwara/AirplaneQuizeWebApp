import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: '#3F416D',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	borderRadius: 2,
};

export default function BasicModal() {
	const [open, setOpen] = React.useState(true);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const questionCount = [10, 20, 30, 40, 50];

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<div
						style={{
							width: '100%',
							margin: '10px',
							maxHeight: '500px',
							overflow: 'auto',
						}}
					>
						{questionCount.map((val, index) => (
							<div
								key={index}
								style={{
									backgroundColor: '#575D7B',
									padding: 0,
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									borderRadius: '5px',
									color: '#FDF9F9',
									height: '40px',
									marginTop: '10px',
								}}
							>
								<p>{val} Questions</p>
							</div>
						))}
						<div style={{display:'flex',justifyContent:'center',alignItems:'center', marginTop:'20px'}}>
                            <button style={{backgroundColor:'#241B3E', border:'none' ,outline:'none' ,padding:'10px 50px', borderRadius:'5px', color:'#ffff' }}>Close</button>
                        </div>
					</div>
				</Box>
			</Modal>
		</div>
	);
}
