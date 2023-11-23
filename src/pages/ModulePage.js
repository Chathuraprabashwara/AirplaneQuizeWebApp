import React, { useState } from 'react';
import Modal from '../Components/Modal';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import Questions from '../Components/Questions';
import { IconButton } from '@mui/material';
import { useLocation } from 'react-router-dom';
import '../Css/ModulePage.css'; // Add your external CSS file
import ResultsSheet from '../Components/ResultsSheet';

function ModulePage() {
	const { state } = useLocation();
	const { data } = state;
	const [showResult, setShowResult] = useState(false);
	const [qCount, setQCount] = useState(0);
	const [answers, setAnswer] = useState('');
	const [question, setQuestion] = useState(0);
	const [isCorrect, setIsCorrect] = useState([]);
	const [color, setColor] = useState('');
	const [questionSet, setQuestionSet] = useState(data);

	console.log(data);

	const handleBack = () => {
		setAnswer(null);
		setColor(null);
		setQuestion((prev) => prev - 1);
	};
	const handleNext = () => {
		setAnswer(null);
		setColor(null);
		setQuestion((prev) => prev + 1);
	};
	const handleShowAnswer = () => {
		questionSet[question].answers.map((val) => {
			if (val.is_correct_answer) {
				setAnswer(val.id);
				if (val.id === color) {
					console.log(color);
					console.log(val.id);
					setIsCorrect((prev) => [...prev, questionSet[question].id]);
				}
			}
		});
	};

	console.log(isCorrect);
	const handleShowResultSheet = () => {
		setShowResult(true);
		setAnswer(null);
		setColor(null);
	};
	console.log(questionSet);

	return (
		<>
			<div className="header-container">
				<p className="header-text">Flight Planning and Monitoring</p>
				<div className="header-info">
					<p className="info-text">Total Questions - {data.length}</p>
					<IconButton className="info-icon">
						<ChangeCircleOutlinedIcon className="icon" />
					</IconButton>
				</div>
			</div>
			<div>
				{showResult ? (
					<ResultsSheet
						isCorrect={isCorrect}
						data={data}
						setQuestionSet={setQuestionSet}
						setShowResult={setShowResult}
						setQuestion={setQuestion}
					/>
				) : (
					<Questions
						data={questionSet[question]}
						answers={answers}
						setAnswer={setAnswer}
						isCorrect={isCorrect}
						setIsCorrect={setIsCorrect}
						setColor={setColor}
						color={color}
					/>
				)}
			</div>
			{!showResult && (
				<div className="button-container">
					{question > 0 && (
						<button
							className="BackBtn"
							onClick={handleBack}
						>
							Back
						</button>
					)}
					{question !== questionSet.length - 1 && (
						<button
							className="nextBtn"
							onClick={handleNext}
						>
							Next
						</button>
					)}
					<button
						className="showAnswer"
						onClick={handleShowAnswer}
					>
						Show Answer
					</button>
					{question === questionSet.length - 1 && (
						<button
							className="showAnswer"
							onClick={handleShowResultSheet}
						>
							Show Result Sheet
						</button>
					)}
				</div>
			)}
		</>
	);
}

export default ModulePage;
