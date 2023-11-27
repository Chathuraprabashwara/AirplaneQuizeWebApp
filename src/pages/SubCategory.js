import React, { useState } from 'react';
import '../Css/subCategory.css';
import { useLocation, useNavigate } from 'react-router-dom';

const data2 = [
	{
		id: 1,
		question: 'This Question 1',
		sub_module_id: 1,
		answers: [
			{
				id: 1,
				answer: 'anwer 1',
				question_id: 1,
				is_image: true,
				is_correct_answer: false,
			},
			{
				id: 2,
				answer: 'anwer 2',
				question_id: 1,
				is_image: true,
				is_correct_answer: false,
			},
			{
				id: 3,
				answer: 'anwer 3',
				question_id: 1,
				is_image: true,
				is_correct_answer: true,
			},
			{
				id: 4,
				answer: 'anwer 4',
				question_id: 1,
				is_image: true,
				is_correct_answer: false,
			},
		],
	},
	{
		id: 2,
		question: 'This Question 2',
		sub_module_id: 1,
		answers: [
			{
				id: 1,
				answer: 'anwer 1',
				question_id: 2,
				is_image: true,
				is_correct_answer: false,
			},
			{
				id: 2,
				answer: 'anwer 2',
				question_id: 2,
				is_image: true,
				is_correct_answer: false,
			},
			{
				id: 3,
				answer: 'anwer 3',
				question_id: 2,
				is_image: true,
				is_correct_answer: true,
			},
			{
				id: 4,
				answer: 'anwer 4',
				question_id: 2,
				is_image: true,
				is_correct_answer: false,
			},
		],
	},
	{
		id: 3,
		question: 'This Question 3',
		sub_module_id: 1,
		answers: [
			{
				id: 1,
				answer: 'anwer 1',
				question_id: 3,
				is_image: true,
				is_correct_answer: false,
			},
			{
				id: 2,
				answer: 'anwer 2',
				question_id: 3,
				is_image: true,
				is_correct_answer: false,
			},
			{
				id: 3,
				answer: 'anwer 3',
				question_id: 3,
				is_image: true,
				is_correct_answer: false,
			},
			{
				id: 4,
				answer: 'anwer 4',
				question_id: 3,
				is_image: true,
				is_correct_answer: true,
			},
		],
	},
	{
		id: 4,
		question: 'This Question 4',
		sub_module_id: 1,
		answers: [
			{
				id: 1,
				answer: 'anwer 1',
				question_id: 4,
				is_image: true,
				is_correct_answer: true,
			},
			{
				id: 2,
				answer: 'anwer 2',
				question_id: 4,
				is_image: true,
				is_correct_answer: false,
			},
			{
				id: 3,
				answer: 'anwer 3',
				question_id: 4,
				is_image: true,
				is_correct_answer: false,
			},
			{
				id: 4,
				answer: 'anwer 4',
				question_id: 4,
				is_image: true,
				is_correct_answer: false,
			},
		],
	},
];

export default function SubCategory() {
	// Access props passed from the previous page
	const [selectedCategory, setSelectedCategory] = useState([]);
	const [qNumber, setQNumber] = useState('');
	const { state } = useLocation();
	const navigate = useNavigate();

	const { subCategory } = state;

	const handleSelectCategory = (id) => {
		if (selectedCategory.includes(id)) {
			const filterCategory = selectedCategory.filter((val) => val !== id);
			setSelectedCategory(filterCategory);
		} else {
			setSelectedCategory((prev) => [...prev, id]);
		}
	};

	const handleSelectAll = () => {
		const IdList = subCategory.map((val) => val.id);
		setSelectedCategory(IdList);
		console.log(IdList);
	};

	const handleStart = () => {
		const ServiceUrl = process.env.REACT_APP_SERVICE_URL;
		const data = {
			sub_module_ids: selectedCategory,
			q_limit: qNumber,
		};
		if (selectedCategory.length > 0) {
			fetch(ServiceUrl+"/questions/answers/get/categories",{
				method:"POST",
				body:JSON.stringify(data),
				headers:{"Content-type":"application/json; charset=UTF-8"}
			})
  		  	.then(res => res.json())
			.then(resBody => navigate(`/module/${selectedCategory.toString()}`, { state: { data: resBody} }))
    		.catch(err => console.log(err));
		} else {
			alert('please Select atleast one sub Category');
		}

		console.log(data);
	};

	console.log(subCategory);
	return (
		<div className="main">
			<div className="Container">
				<h1>Module Name</h1>
			</div>
			<div className="Container2">
				<div className="subCategory">
					{subCategory.map((val) => (
						<div
							className="subName"
							style={{
								backgroundColor: selectedCategory.includes(val.id) && '#2cb7a9',
							}}
							onClick={() => handleSelectCategory(val.id)}
							key={val.id}
						>
							<p>{val.name}</p>
						</div>
					))}
				</div>
			</div>

			<div className="Container3">
				<div className="questionCount">
					<h3>Questions</h3>
					<input
						type="number"
						value={qNumber}
						onChange={(e) => {
							setQNumber(e.target.value);
						}}
					/>
				</div>
				<div className="buttonContainer">
					<button
						className="button"
						onClick={handleSelectAll}
					>
						All
					</button>
					<button
						className="button"
						onClick={() => {
							setSelectedCategory([]);
							setQNumber('');
						}}
					>
						Clear
					</button>
					<button
						className="button"
						onClick={handleStart}
					>
						Start
					</button>
				</div>
			</div>
		</div>
	);
}
