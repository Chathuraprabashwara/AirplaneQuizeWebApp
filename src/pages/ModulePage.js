import React, { useState } from 'react';
import Modal from '../Components/Modal';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import Questions from '../Components/Questions';
import { IconButton } from '@mui/material';

import '../Css/ModulePage.css'; // Add your external CSS file

function ModulePage() {
	const [open2, setOpen2] = useState(true);
	const [qCount, setQCount] = useState(0);
  const [answers, setAnswer] = useState([]);
  const [question,setQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);


  const handleBack = () => {
    setIsCorrect(null)
    setQuestion((prev) => prev -1)
  }
  const handleNext = () => {
    setIsCorrect(null)
    setQuestion((prev) => prev + 1)
  }




	return (
		<>
			<div className="header-container">
				<p className="header-text">Flight Planning and Monitoring</p>
				<div className="header-info">
					<p className="info-text">Total Questions - {qCount}</p>
					<IconButton className="info-icon">
						<ChangeCircleOutlinedIcon
							onClick={() => setOpen2(true)}
							className="icon"
						/>
					</IconButton>
				</div>
			</div>
			<div>
				<Questions data={data[question]} answers={answers} setAnswer={setAnswer} isCorrect={isCorrect} setIsCorrect={setIsCorrect} />
			</div>
			<div className="button-container">
         <button className='BackBtn' onClick={handleBack}>Back</button>
				<button className='nextBtn' onClick={handleNext}>Next</button>
			</div>
			<Modal open2={open2} setOpen2={setOpen2} setQCount={setQCount} />
		</>
	);
}

export default ModulePage;
