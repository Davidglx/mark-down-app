import React, { useEffect, useState } from "react";
import { Alert } from '@mui/material';


const SingleDisplay = ({ rgb, index, weight}) => {
    
    const [alert, setAlert] = useState(false);
    console.log(rgb);
    const rgbColor = rgb.join(",");
    const rgbColors = `rgb(${rgbColor})`;
    console.log(index);
    const handleClick = () => {
        setAlert(true);
        navigator.clipboard.writeText(rgbColors);
    };

    useEffect(() => {
            setTimeout(() => {
                setAlert(false);
            }, 1500);
    }, [alert]);

  return (
   <div onClick={handleClick}
   className={`rgbcolors ${index > 20 && "colors-bright"}`}
   style={{ backgroundColor: rgbColors}}
   >
       <h5>{rgbColors}</h5>
       <span>{weight}%</span>
       {alert && <Alert className='alert' severity='success'>rgb copied</Alert>}
   </div>
  )
}

export default SingleDisplay;


