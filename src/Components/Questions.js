import React, { useState } from 'react';
import '../Css/Questions.css'; // Import the CSS file
import Grid from '@mui/material/Grid';

function Questions({ data, answers, setAnswer ,isCorrect,setIsCorrect }) {
	const [color, setColor] = useState('#DA0E3F');
		console.log(answers)
	const handleAnswer = (item, id) => {
		setColor('#DA0E3F');

		if (answers.length > 0) {
			const checkAvailability = answers.filter(
				(val) => +val.slice(0, -1) !== item
			);
			setAnswer([...checkAvailability, `${item}${id}`]);
		} else {
			setAnswer((prev) => [...prev, `${item}${id}`]);
		}

		setIsCorrect(data.correctAnswers - 1);
		if (data.correctAnswers == id + 1) {
			setColor('green');
		}
	};
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
							{1 + 1}) {data.question}
						</p>
						<div className="answerContainer">
							{data.answers.map((val, idx) => (
								<div
									key={idx}
									className="answerText"
									style={{
										backgroundColor:
											(answers.includes(`${data.id}${idx}`) && color) ||
											(idx === isCorrect && 'blue'),
									}}
									onClick={() => handleAnswer(data.id, idx)}
								>
									{idx + 1}) {val}
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
