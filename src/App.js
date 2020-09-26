import React, {useState} from 'react';
import Particles from 'react-particles-js';
//import logo from './logo.svg'
import Logo from './Components/Logo/Logo';
import Signin from './Components/Signin/Signin';
import Dropdown from './Components/Dropdown/Dropdown';
import Footer from './Components/Footer/Footer';
//import Dropdown1 from './Components/Dropdown1/Dropdown1';


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

  const [hide,setHide] = useState(1);
  const [hide2,setHide2] = useState(1);
  
  let content1 ={
    title: "How to prepare and protect yourself?",
    body:`<ul>
    <li><p style={{width: "2100px", height: "0px"}}><b><i><u>Know how it spreads :-</u></i></b><br /> <br/>
         1. There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19). <br /> <br/>
         2. The best way to prevent illness is to avoid being exposed to this virus. <br /> <br/>
         3. The virus is thought to spread mainly from person-to-person. <br/> <br/>
         4. Between people who are in close contact with one another (within about 6 feet). <br /> <br/>
         5. Through respiratory droplets produced when an infected person coughs, sneezes or talks. <br /> <br/>
         6. These droplets can land in the mouths or noses of people who are nearby or possibly be inhaled into the lungs.<br /> <br/>
         7. Some recent studies have suggested that COVID-19 may be spread by people who are not showing symptoms.</p></li>
    </ul>`
  }
  let content2 ={
    title: "What to do if u feel u are sick?",
    body:`<ul>
    <li><p style={{width: "2100px", height: "0px"}}><b><i><u>Steps for prevention</u></i></b><br /> <br/>
    1. Stay home except maedical care. <br /> <br/>
    2. Seperate yourself from othe people as much as u can, stay in your own room as possible. <br /> <br/>
    3. Monitor your virus. <br /> <br/>
    4. Call your doctor before visiting. <br /> <br/>
    5. If you are sick,wear mask over your nose and mouth. <br /> <br/>
    6. Cover your mouth with tissue when sneezes,throw used tissue,wash your hands.<br /> <br/>
    7. Wash your hands with soap and water atleast for 20 seconds,use hand sanitizer,avoid touching your body parts with unwashed hands.<br/> <br/>
    8. Avoid sharing your own and personal items.<br/> <br />
    9. Clean All "high touch" surface everyday and frequently.<br/> <br/>
    10. Some of the symptoms of flu and COVID-19 are similar, making it hard to tell the difference between them based on symptoms alone. Diagnostic testing can help determine if you are sick with the flu or COVID-19.
     </p></li>
    </ul>`
  }
  let content3 ={
    title: "Frequently Asked Questions(FAQ)",
    body:`<ul>
    <li><p style=width: "2100px", height: "0px"><b><i><u>1. What is social distancing?</u></i></b><br />
        Social distancing, also called “physical distancing,” means keeping a safe space between yourself and other people who are not from your household. To practice social or physical distancing, stay at least 6 feet (about 2 arms' length) from other people who are not from your household in both indoor and outdoor spaces. <br /> <br/>
    2. <b><i><u>How are people tested for covid-19?</b></i></u> <br/>
        To be tested for COVID-19, a sample is typically collected from your nose and/or throat with a special swab at a designated collection location staffed by health care professionals.<br/><br/>
    3. <b><i><u>If someone recovers from covid ? Can he/she get twice</b><i></u><br/>
         CDC and partners are investigating to determine if a person can get sick with COVID-19 more than once. Until we know more, continue to take steps to protect yourself and others.<br/><br/>
    4. <b><i><u>What is the risk of getting COVID-19 on an airplane?</b></i></u><br/>
         Because of how air circulates and is filtered on airplanes, most viruses and other germs do not spread easily. Although the risk of infection on an airplane is low, try to avoid contact with sick passengers and wash your hands often with soap and water for at least 20 seconds or use hand sanitizer that contains at least 60% alcohol.<br /><br/>
    5. <b><i><u>What steps can my family take to reduce our risk of getting COVID-19?</b></i></u><br/>
         1. Avoid close contact with people who are sick.<br/>
         2. Stay home when you are sick, except to get medical care. <br/>
         3. Cover your coughs and sneezes with a tissue and throw the tissue in the trash.<br/>
         4. Wash your hands often with soap and water for at least 20 seconds, especially after blowing your nose, coughing, or sneezing; going to the bathroom; and before eating or preparing food.<br/>
         5. If soap and water are not readily available, use an alcohol-based hand sanitizer with at least 60% alcohol. Always wash hands with soap and water if hands are visibly dirty.<br/><br/>
    6. <b><i><u>How can I check the status of my Economic Impact Payment?</b></i></u> <br/>
         The IRS has a free web app called “Get My Payment” that you can use to check the status of your Economic Impact Payment.<br/><br/>
    7.<b><i><u>Are the symptoms of COVID-19 different in children than in adults?</b></i></u><br/>
         No. The symptoms of COVID-19 are similar in children and adults. COVID-19 can look different in different people. For many people, being sick with COVID-19 would be a little bit like having the flu. People can get a fever, cough, or have a hard time taking deep breaths. Most people who have gotten COVID-19 have not gotten very sick. Only a small group of people who get it have had more serious problems.<br/><br/>
    8.<b><i><u>Should I trust ads for products that say they can prevent, treat, or cure COVID-19?</b></i></u><br/>
         No. According to the FDA, there are currently no products or treatments available to the public that can prevent, treat or cure COVID-19. <br/><br/>
    9. <b><i><u>What is a novel coronavirus?</b</i></u><br/>
         A novel coronavirus is a new coronavirus that has not been previously identified. The virus causing coronavirus disease 2019 (COVID-19), is not the same as the coronaviruses that commonly circulate among humans and cause mild illness, like the common cold.<br/><br/>
    10.<b><i><u>What is contact tracing?</b></i></u><br/>
         Contact tracing slows the spread of COVID-19. Contact tracing helps protect you, your family, and your community by: Letting people know they may have been exposed to COVID-19. 


        </p></li>
    </ul>`
  }
  

  function change(){
    setHide2(prevState => (1- prevState))
  }

  const[hideFooter,setHideFooter]= useState(1);
  return (
    <div className="App">
      <Logo />
      <Signin />
      <div onClick={() => setHide(prevState => (1 - prevState))}><div onClick={() => setHideFooter(prevState => (1 - prevState))}><Dropdown content={content1} /></div></div>
      <br />
      <hr />
      <div onClick={change}> {hide ? <div onClick={() => setHideFooter(prevState => (1 - prevState))}><Dropdown content={content2}/></div> : null}</div>
      <br />
      <hr />
      <br />
      {(hide && hide2) ? <div onClick={() => setHideFooter(prevState => (1 - prevState))}><Dropdown content={content3}/></div> : null} 
      {hideFooter ? <Footer/> : null}
      <Particles className='particles' 
                params={particleOptions} />
      
    </div>
  );
}

export default App;
