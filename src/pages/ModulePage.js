import React, { useState } from 'react';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import HomeIcon from '@mui/icons-material/Home';
import Questions from '../Components/Questions';
import { IconButton } from '@mui/material';
import { useLocation ,useNavigate } from 'react-router-dom';
import '../Css/ModulePage.css'; // Add your external CSS file
import ResultsSheet from '../Components/ResultsSheet';

function ModulePage() {
	const { state } = useLocation();
	const { data } = state;
	const [showResult, setShowResult] = useState(false);
	const [select, setSelect] = useState([]);
	const [answers, setAnswer] = useState('');
	const [question, setQuestion] = useState(0);
	const [isCorrect, setIsCorrect] = useState([]);
	const [color, setColor] = useState('');
	const [questionSet, setQuestionSet] = useState(data);

	const navigate = useNavigate()

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
			}
		});
	};

	const handleShowResultSheet = () => {
		questionSet.map((val) => {
			select.map((val2) => {
				if (val.id === val2.questionId) {
					val.answers.map((ans) => {
						if (ans.is_correct_answer) {
							if (ans.id === val2.answer) {
								setIsCorrect((prev) => [...prev, val.id]);
							}
						}
					});
				}
			});
		});
		if (select.length > 0) {
			setShowResult(true);
		} else {
			alert('please select ansewers before check results');
		}
		setAnswer(null);
		setColor(null);
	};

	return (
		<>
			<div className="header-container">
				<p className="header-text">Flight Planning and Monitoring</p>
				<div className="header-info">
					<p className="info-text">Total Questions - {data.length}</p>
						<ChangeCircleOutlinedIcon className="icon" onClick={() => { navigate('/subCategory/3',data)}} />
						<HomeIcon className="icon" onClick={() => { navigate('/home')}} />
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
						setSelect={setSelect}
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
						setSelect={setSelect}
						select={select}
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
