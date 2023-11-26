import React from 'react';
import '../Css/ResultSheet.css';
function ResultsSheet({
	isCorrect,
	data,
	setQuestionSet,
	setShowResult,
	setQuestion,
	setSelect,
}) {
	const percentage = (isCorrect.length / data.length) * 100;

	const handleRetry = () => {
		const incorrectAnswers = data.filter((val) => !isCorrect.includes(val.id));
		setQuestionSet(incorrectAnswers);
		setQuestion(0);
		setShowResult(false);
		setSelect([]);
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
