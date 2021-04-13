import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What language is the most spoken worldwide?',
			answerOptions: [
				{ answerText: 'Spanish', isCorrect: false },
				{ answerText: 'Chinese', isCorrect: false },
				{ answerText: 'English', isCorrect: true },
				{ answerText: 'Dutch', isCorrect: false },
			],
		},
		{
			questionText: 'Which one of these characters isn’t a part of the Friends group?',
			answerOptions: [
				{ answerText: 'Rachael', isCorrect: false },
				{ answerText: 'Grady', isCorrect: true },
				{ answerText: 'Joey', isCorrect: false },
				{ answerText: 'Phoebe', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'Fe is the chemical symbol for',
			answerOptions: [
				{ answerText: 'Zinc', isCorrect: false },
				{ answerText: 'Hydrogen', isCorrect: false },
				{ answerText: 'Fluorine', isCorrect: false },
				{ answerText: 'Iron', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}