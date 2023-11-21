import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom";

import '../Css/style.css'


function LoadingScreen() {
    const navigate = useNavigate();

    useEffect(() => {
      const redirectTimeout = setTimeout(() => {
        // Replace '/target-page' with the path you want to redirect to
        navigate('/home');
      }, 3000);
  
      // Cleanup the timeout to prevent memory leaks
      return () => clearTimeout(redirectTimeout);
    }, []);
  return (
    <>
<div class="cssload-box-loading">
</div>
    </>  )
}

export default LoadingScreen