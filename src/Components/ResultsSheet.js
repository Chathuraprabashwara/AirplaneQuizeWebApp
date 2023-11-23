import React from 'react';
import '../Css/ResultSheet.css';
function ResultsSheet({
	isCorrect,
	data,
	setQuestionSet,
	setShowResult,
	setQuestion,
}) {
	const percentage = (isCorrect.length / data.length) * 100;
	console.log(data);
	const handleRetry = () => {
		console.log(isCorrect);
		console.log(data.filter((val) => !isCorrect.includes(val.id)));
		const incorrectAnswers = data.filter((val) => !isCorrect.includes(val.id));
		// console.log(incorrectAnswers)
		setQuestionSet(incorrectAnswers);
		setQuestion(0);
		setShowResult(false);
		console.log(incorrectAnswers);
	};
	return (
		<div className="ResultSheetContainer">
			<div className="result">
				<h1>{percentage}%</h1>
			</div>
			<div className="details">
				<h2>Correct Answers : {isCorrect.length}</h2>
				{percentage !== 100 && (
					<button
						className="buttonTry"
						onClick={handleRetry}
					>
						ReTry ?{' '}
					</button>
				)}{' '}
			</div>
		</div>
	);
}

export default ResultsSheet;
