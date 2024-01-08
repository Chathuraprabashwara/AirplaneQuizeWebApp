import React from 'react';
import { useNavigate } from 'react-router-dom';


import '../Css/module.css';


function Module({ name , id }) {
	const navigate = useNavigate();
	return (
		<div
			className="ModuleCard"
			onClick={() => {
				navigate(`/subCategory/${id}`);
				sessionStorage.setItem('CategoryName', name);

			}}
		>
			{name.toUpperCase()}
		</div>
	);
}

export default Module;
