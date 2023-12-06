import React, { useEffect, useState } from 'react';
import ReplyIcon from '@mui/icons-material/Reply';
import HomeIcon from '@mui/icons-material/Home';
import Questions from '../Components/Questions';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Css/ModulePage.css'; // Add your external CSS file
import ResultsSheet from '../Components/ResultsSheet';
import AlertDialog from '../Components/AlertDialog';

function ModulePage() {
	const navigate = useNavigate();
	const { state } = useLocation();
	useEffect(() => {
		// Check if the state is null
		if (state === null) {
			// Navigate to the home page
			navigate('/home');
		}
	}, [state, navigate]);

	const CategoryName = sessionStorage.getItem('CategoryName');

	const data = state?.data;
	const id = state?.id;
	const [showResult, setShowResult] = useState(false);
	const [select, setSelect] = useState([]);
	const [answers, setAnswer] = useState('');
	const [question, setQuestion] = useState(0);
	const [isCorrect, setIsCorrect] = useState([]);
	const [color, setColor] = useState('');
	const [questionSet, setQuestionSet] = useState(data);
	const [error, setError] = useState(false);
	const [errMessage, setErrMessage] = useState('');
	const [errBtn, setErrBtn] = useState(false);

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
			setError(true);
			setErrBtn(true);
			setErrMessage('Please select ansewers before check results');
		}
		setAnswer(null);
		setColor(null);
	};

	return (
		<>
			<AlertDialog
				open={error}
				setOpen={setError}
				message={errMessage}
				oneBtn={errBtn}
			/>
			<div className="header-container">
				<p className="header-text">{CategoryName}</p>
				<div className="header-info">
					<p className="info-text">Total Questions - {data?.length}</p>
					<ReplyIcon
						className="icon"
						onClick={() => {
							navigate(`/subCategory/${id}`);
						}}
					/>
					<HomeIcon
						className="icon"
						onClick={() => {
							setError(true);
							setErrMessage(
								'Exiting now will result in the loss of your selected Sub Category Question Lists and associated answers. Are you sure you want to proceed?'
							);
						}}
					/>
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
						data={questionSet && questionSet[question]}
						id =  {question}
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
					{question !== questionSet?.length - 1 && (
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
					{question === questionSet?.length - 1 && (
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
