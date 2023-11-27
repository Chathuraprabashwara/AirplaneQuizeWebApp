import React, { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen';
import Module from '../Components/Module';
import Grid from '@mui/material/Grid';
import axios from 'axios';

function Home({ data }) {
	const [moduleList, setmoduleList] = useState([]);
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_SERVICE_URL}/categories/get`)
			.then((res) => setmoduleList(res.data))
			.catch((err) => console.log(err));
	}, []);
	return (
		<>
			{moduleList.length === 0 ? (
				<LoadingScreen />
			) : (
				<div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '25vh',
							color: '#BBE1FA',
							fontSize: '60px',
						}}
					>
						ATPL Examination System{' '}
					</div>
					<div style={{ height: '75vh', margin: '0 100px' }}>
						<Grid
							container
							justifyContent="space-between"
							rowSpacing={4}
							columnSpacing={{ xs: 1, sm: 2, md: 3 }}
						>
							{moduleList.map((ModuleObject, index) => (
								<Grid
									item
									xs={4}
									key={index}
								>
									<Module
										name={ModuleObject.name}
										id={ModuleObject.id}
									/>
								</Grid>
							))}
						</Grid>
					</div>
				</div>
			)}
		</>
	);
}

export default Home;
