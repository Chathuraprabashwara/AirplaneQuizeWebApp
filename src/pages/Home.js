import React, { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen';
import Module from '../Components/Module';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import './home.css'

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
				<Grid
					container
					justifyContent="center"
				>
					<Grid item xs={12} className='moduleTitleContainer'>
						<h1
							className='moduleTitle'
						>
							ATPL Examination System{' '}
						</h1>
					</Grid>
          <Grid item xs={10}>
            <Grid
						item
						container
						justifyContent='space-evenly'
						rowSpacing={2}
						columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					>
						{moduleList.map((ModuleObject, index) => (
							<Grid
								item
								xs={12}
                md={4}
								key={index}
							>
								<Module
									name={ModuleObject.name}
									id={ModuleObject.id}
								/>
							</Grid>
						))}
					</Grid>
          </Grid>
					
				</Grid>
			)}
		</>
	);
}

export default Home;
