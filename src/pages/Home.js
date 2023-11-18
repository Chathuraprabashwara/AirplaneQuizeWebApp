import React, { useEffect, useState } from 'react'
import Module from '../Components/Module'
import Grid from '@mui/material/Grid';

const ServiceUrl = process.env.REACT_APP_SERVICE_URL;
function Home({data}) {
  const [moduleList, setmoduleList] = useState([]);
  useEffect(()=>{
    fetch(ServiceUrl+"/categories/get")
    .then(res => res.json())
    .then(res=> setmoduleList(res))
    .catch(err => console.log(err));
  },[]);
  return (<div>
    <div style={{display:'flex', justifyContent:'center',alignItems:'center', height:'25vh', color:"#BBE1FA", fontSize:'40px'}}>ATPL Examination System {data}</div>
    <div style={{height:'75vh', margin:'0 100px'}}>
        <Grid container style={{ justifyContent:'center'}} rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
            moduleList.map((ModuleName,index) => (
                <Grid item xs={5}  key={index} >
                   <Module name={ModuleName.name}/>
                </Grid>
            ))
        }
       </Grid>
    </div>
    </div>
  )
}

export default Home