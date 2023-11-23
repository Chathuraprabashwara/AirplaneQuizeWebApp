import React, { useState } from 'react';
import '../Css/Questions.css'; // Import the CSS file
import Grid from '@mui/material/Grid';

function Questions({ data, answers, setAnswer ,isCorrect,setIsCorrect, setColor,color}) {
		console.log(data)
	const handleAnswer = (id,val) => {
		setColor(id)
		// setIsCorrect(val)
	};
	console.log(color)
	console.log(isCorrect)
	return (
		<>
			<div
				key={1}
				className="questionContainer2"
			>
				<Grid
					container
					sx={{ width: '100%' }}
				>
					<Grid xs="10">
						<p className="questionText">
							{data.id}) {data.question}
						</p>
						<div className="answerContainer">
							{data.answers.map((val, idx) => (
								<div
									key={idx}
									className="answerText"
									style={{
									backgroundColor:answers ===val.id && 'red' || color ===val.id  && 'blue' 
									}}
									onClick={() => handleAnswer(val.id,val)}
								>
									{val.id}) {val.answer}
								</div>
							))}
						</div>
					</Grid>
					{data.image && (
						<Grid xs="2">
							<img
								style={{
									width: '193px',
									height: '166px',
									marginTop: '10px',
								}}
								src={data.url}
								alt="question"
							/>
						</Grid>
					)}
				</Grid>
			</div>
		</>
	);
}

export default Questions;
