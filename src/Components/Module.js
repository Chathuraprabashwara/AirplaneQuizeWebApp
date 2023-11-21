import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../Css/module.css';

const subCategory = [
	{
		id: 1,
		name: 'module name 1',
	},
  {
		id: 2,
		name: 'module name 2',
	},
  {
		id: 3,
		name: 'module name 4',
	}
];

function Module({ name }) {
	const navigate = useNavigate();
	return (
		<div
			className="ModuleCard"
			onClick={() => {
				navigate(`/subCategory/3`, { state: { subCategory: subCategory, prop2: 'value2' } });
			}}
		>
			{name}
		</div>
	);
}

export default Module;
