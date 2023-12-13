import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import '../Css/subCategory.css';
import { useNavigate, useParams } from 'react-router-dom';
import AlertDialog from '../Components/AlertDialog';
import LoadingScreen from '../pages/LoadingScreen';

export default function SubCategory() {
	// Access props passed from the previous page
	const [selectedCategory, setSelectedCategory] = useState([]);
	const [subCategory, setSubCategory] = useState([]);
	const [selectedCategoryNames, setSelectedCategoryNames] = useState([]);
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

	const handleSelectCategory = (id, name) => {
		if (selectedCategory.includes(id)) {
			const filterCategory = selectedCategory.filter((val) => val !== id);
			const filterCategoryNames = selectedCategoryNames.filter(
				(val) => val !== name
			);

			setSelectedCategory(filterCategory);
			setSelectedCategoryNames(filterCategoryNames);
		} else {
			setSelectedCategory((prev) => [...prev, id]);
			setSelectedCategoryNames((prev) => [...prev, name]);
		}
	};

	const handleSelectAll = () => {
		const IdList = subCategory.map((val) => val.id);
		setSelectedCategory(IdList);
		console.log(IdList);
	};

	const createUniqueString = (inputArray) => {
		// Convert the input array to a string
		const inputString = inputArray.join(',');

		// Simple hash function to generate a hash code
		const hash = (str) => {
			let hashValue = 0;
			for (let i = 0; i < str.length; i++) {
				const charCode = str.charCodeAt(i);
				hashValue = (hashValue << 5) - hashValue + charCode;
			}
			return hashValue;
		};

		// Get a hash code for the input string
		const hashCode = hash(inputString);

		// Convert the hash code to a string and ensure it is within the desired length range
		const resultString = Math.abs(hashCode).toString().slice(0, 10);

		// Ensure the result string is at least 5 characters long
		const finalString = resultString.padEnd(5, '0');

		return finalString;
	};

	const QuestionsPageId = createUniqueString(selectedCategoryNames);

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
					navigate(`/module/${QuestionsPageId}`, {
						state: { data: shuffle(res.data), id: id },

					});
				});
		} else {
			setError(true);
		}

		console.log(data);
	};
	return (
		<>
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
							className="backBtnIcon"
							onClick={() => {
								navigate('/home');
							}}
						/>
					</div>
					<div style={{ margin: 'auto' }}>
						<h1>{CategoryName}</h1>
					</div>
				</div>
				{subCategory.length > 0 ? (
					<div className="Container2">
						<div className="subCategory">
							{subCategory.map((val) => (
								<div
									className="subName"
									style={{
										backgroundColor:
											selectedCategory.includes(val.id) && '#2cb7a9',
									}}
									onClick={() => handleSelectCategory(val.id, val.name)}
									key={val.id}
								>
									<p>{val.name}</p>
									<p style={{marginLeft:'10px'}}>{val?.nquestions}</p>
								</div>
							))}
						</div>
					</div>
				) : (
					<LoadingScreen />
				)}
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
		</>
	);
}
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}