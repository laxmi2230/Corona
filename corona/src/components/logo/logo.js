
import React from 'react';
import Tilt from 'react-tilt';
import coronaimage from './image.png';
import './logo.css';

const Logo = () => {
    return (
     <div className='ma4 mt0'>
       <Tilt className="Tilt br2 " options={{ max : 50 }}   >
       <div className="Tilt-inner"><img style={{paddingTop: '40px', width: 420}} alt='logo' src="https://github.com/laxmi2230/Corona/raw/Laxmi/src/Components/Logo/image.png" /> </div>
       </Tilt>
    </div>
     
    );
}


export default Logo;