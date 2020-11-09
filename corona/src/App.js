import React, {  useState } from 'react';
import Register from './components/register';
import Footer from './components/footer';
import Logo from './components/logo/logo';
import Particles from 'react-particles-js';
import DatePicker from 'react-date-picker'

import './App.css';



const particleOptions = {
  particles: {
    number: {
      value: 400,
      density: {
        enable: true,
        value_area: 2000
      }
    }
  }
}

function App() {

  // const [hide,setHide] = useState(1);
  // const [hide2,setHide2] = useState(1);
  
  

  // function change(){
  //   setHide2(prevState => (1- prevState))
  // }

  // const[hideFooter,setHideFooter]= useState(1);
  return (
    <div className="App">
     <Logo />
      <Register />
            <Particles className='particles' 
                params={particleOptions} />
      
    </div>
  );
}

export default App;