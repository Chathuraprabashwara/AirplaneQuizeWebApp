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
	},
	{
		id: 4,
		name: 'module name 1',
	},
	{
		id: 5,
		name: 'module name 2',
	},
	{
		id: 6,
		name: 'module name 4',
	},
	{
		id: 7,
		name: 'module name 1',
	},
	{
		id: 8,
		name: 'module name 2',
	},
	{
		id: 9,
		name: 'module name 4',
	},
	{
		id: 10,
		name: 'module name 1',
	},
	{
		id: 11,
		name: 'module name 2',
	},
	{
		id: 12,
		name: 'module name 4',
	},
];

function Module({ name , id }) {
	const navigate = useNavigate();
	return (
		<div
			className="ModuleCard"
			onClick={() => {
				const ServiceUrl = process.env.REACT_APP_SERVICE_URL;
    			fetch(ServiceUrl+"/submodules/get/category/"+id)
				.then(res => res.json())
				.then(resBody =>{
				navigate(`/subCategory/${id}`, {
					state: { subCategory: resBody, prop2: 'value2' },
				});
				})
			}}
		>
			{name}
		</div>
	);
}

export default Module;
