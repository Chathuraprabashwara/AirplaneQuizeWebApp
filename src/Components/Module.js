import React from 'react';
import { useNavigate } from 'react-router-dom';

import './module.css';

function Module({ name }) {
	const navigate = useNavigate();
	return (
		<div
			className="ModuleCard"
			onClick={() => {
				navigate(`/module/${name.replace(/\s/g, '')}`);
			}}
		>
			{name}
		</div>
	);
}

export default Module;
