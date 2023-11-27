import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import '../Css/subCategory.css';
import { useNavigate, useParams } from 'react-router-dom';
import AlertDialog from '../Components/AlertDialog';

export default function SubCategory() {
	// Access props passed from the previous page
	const [selectedCategory, setSelectedCategory] = useState([]);
	const [subCategory, setSubCategory] = useState([]);
	const [error, setError] = useState(false);
	const [qNumber, setQNumber] = useState('');
	const navigate = useNavigate();

	const { id } = useParams();
	const CategoryName = sessionStorage.getItem('CategoryName');

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_SERVICE_URL}/submodules/get/category/${id}`)
			.then((response) => setSubCategory(response.data))
			.catch((error) => console.error(error));
	}, []);

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
		const data = {
			sub_module_ids: selectedCategory,
			q_limit: qNumber,
		};
		if (selectedCategory.length > 0) {
			axios
				.post(
					`${process.env.REACT_APP_SERVICE_URL}/questions/answers/get/categories`,
					data
				)
				.then((res) => {
					navigate(`/module/${selectedCategory.toString()}`, {
						state: { data: res.data, id: id },
					});
				});
		} else {
			setError(true);
		}

		console.log(data);
	};

	console.log(subCategory);
	return (
		<div className="main">
			<AlertDialog
				open={error}
				setOpen={setError}
				message={
					'You should select at least one Sub Category to Start the Exams'
				}
			/>
			<div className="Container">
				<div style={{ alignSelf: 'center' }}>
					<ArrowCircleLeftOutlinedIcon
						style={{
							color: '#ffff',
							marginLeft: '10px',
							fontSize: '50px',
							marginTop: '10px',
							cursor: 'pointer',
						}}
						onClick={() => {
							navigate('/home');
						}}
					/>
				</div>
				<div style={{ margin: 'auto' }}>
					<h1>{CategoryName}</h1>
				</div>
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
