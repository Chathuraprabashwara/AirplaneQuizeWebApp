import React from 'react'
import Module from '../Components/Module'
import Grid from '@mui/material/Grid';

const ModulesData = ["Flight Planing and Monitoring","Module2","Module3","Module4"]
 
function Home({data}) {
  return (<div>
    <div style={{display:'flex', justifyContent:'center',alignItems:'center', height:'25vh', color:"#BBE1FA", fontSize:'40px'}}>ATPL Examination System {data}</div>
    <div style={{height:'75vh', margin:'0 100px'}}>
        <Grid container style={{ justifyContent:'center'}} rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
            ModulesData.map((ModuleName,index) => (
                <Grid item xs={5}  key={index} >
                   <Module name={ModuleName}/>
                </Grid>
            ))
        }
       </Grid>
    </div>
    </div>
  )
}

export default Home