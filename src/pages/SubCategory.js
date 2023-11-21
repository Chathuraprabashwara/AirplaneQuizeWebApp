import React, { useState } from 'react';
import '../Css/subCategory.css';
import { useLocation } from 'react-router-dom';


const data=[{
  id:1,
  question:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has...",
  answers:["answer1","answer2","answer3" ,"answer4"],
  image:true,
  correctAnswers:1,
  url:'https://flyingmag.sfo3.digitaloceanspaces.com/flyingma/wp-content/uploads/2022/06/23090933/AdobeStock_249454423-scaled.jpeg'
},
{
  id:2,
  question:"what is the name of ...",
  answers:["answer1","answer2","answer3" ,"answer4"],
  correctAnswers:3,

},
{
  id:3,
  question:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has...",
  answers:["answer1","answer2","answer3" ,"answer4"],
  image:true,
  correctAnswers:1,
  url:'https://flyingmag.sfo3.digitaloceanspaces.com/flyingma/wp-content/uploads/2022/06/23090933/AdobeStock_249454423-scaled.jpeg'
},
{
  id:4,
  question:"what is the name of ...",
  answers:["answer1","answer2","answer3" ,"answer4"],
  correctAnswers:3,

},
{
  id:5,
  question:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has...",
  answers:["answer1","answer2","answer3" ,"answer4"],
  image:true,
  correctAnswers:1,
  url:'https://flyingmag.sfo3.digitaloceanspaces.com/flyingma/wp-content/uploads/2022/06/23090933/AdobeStock_249454423-scaled.jpeg'
},
{
  id:6,
  question:"what is the name of ...",
  answers:["answer1","answer2","answer3" ,"answer4"],
  correctAnswers:3,

},
{
  id:7,
  question:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has...",
  answers:["answer1","answer2","answer3" ,"answer4"],
  image:true,
  correctAnswers:1,
  url:'https://flyingmag.sfo3.digitaloceanspaces.com/flyingma/wp-content/uploads/2022/06/23090933/AdobeStock_249454423-scaled.jpeg'
},
{
  id:8,
  question:"what is the name of ...",
  answers:["answer1","answer2","answer3" ,"answer4"],
  correctAnswers:3,

},
{
  id:9,
  question:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has...",
  answers:["answer1","answer2","answer3" ,"answer4"],
  image:true,
  correctAnswers:1,
  url:'https://flyingmag.sfo3.digitaloceanspaces.com/flyingma/wp-content/uploads/2022/06/23090933/AdobeStock_249454423-scaled.jpeg'
},
{
  id:10,
  question:"what is the name of ...",
  answers:["answer1","answer2","answer3" ,"answer4"],
  correctAnswers:3,

},
{
  id:11,
  question:"what is the name of ...",
  answers:["answer1","answer2","answer3" ,"answer4"],
  correctAnswers:3,

},
{
  id:12,
  question:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has...",
  answers:["answer1","answer2","answer3" ,"answer4"],
  image:true,
  correctAnswers:1,
  url:'https://flyingmag.sfo3.digitaloceanspaces.com/flyingma/wp-content/uploads/2022/06/23090933/AdobeStock_249454423-scaled.jpeg'
},
{
  id:13,
  question:"what is the name of ...",
  answers:["answer1","answer2","answer3" ,"answer4"],
  correctAnswers:3,

},
]

export default function SubCategory() {
	// Access props passed from the previous page
	const [selectedCategory, setSelectedCategory] = useState([]);
	const [qNumber, setQNumber] = useState('');
	const { state } = useLocation();
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
  const data = {
    SubCategory:selectedCategory,
    questions:qNumber
  }
    if(selectedCategory.length >0) {

    }else{
      alert('please Select atleast one sub Category')
    }

  console.log(data)
 }

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
					<button className="button" onClick={handleStart}>Start</button>
				</div>
			</div>
		</div>
	);
}
