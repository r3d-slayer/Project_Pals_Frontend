import React, { useState } from 'react'
import './style/Signup.css'
import Form from './Form'
import realimage from './style/image.png'
import Otp from './Otp'
import Student from './Student'
import College from './College'
import Studentcollege from './Studentcollege'

const Signup = () => {

  // const [show,setshow] = useState(false)


  const [show, setshow] = useState(true)

  // const toggled = () =>{
  //   setshow(!show);
  // }
  const toggled = () => {
    setshow(!show);
  }
  const [currentChild, setCurrentChild] = useState(1);
  const handleNext = () => {
    setCurrentChild((prevChild) => (prevChild < 3 ? prevChild + 1 : 3));
  }

  const handleBack = () => {
    setCurrentChild((prevChild) => (prevChild > 1 ? prevChild - 1 : 1));
  };

  const step1 = () => {
    // toggled();
    handleNext();
  }
  const step2 = () => {
    toggled();
    handleNext();
  }
  // const [step,setstep] = useState(1);

  // const steps = 3;
  // const prev = () =>{
  //   setstep(step-1);
  // }
  // const next = () =>{
  //   setstep(step-1);
  // }

  // const totalsteps = steps;

  return (
    <div className='big-container'>
      <div className="container">

        <div className="secondcont">
          <ul>
            <li>
              <p>Uniting Dreams,</p>
            </li>
            <li>
              <p>Defining Success!!</p>
            </li>
            <img src={realimage} alt="A 3D Art" />
          </ul>
        </div>

        <div className="content">
          {currentChild === 1 && <Studentcollege onNext={step1} onNext2={step2} />}
          {currentChild === 2 &&
            (show ? (<Form onNext={handleNext} onBack={handleBack} />) : (<College onNext={handleNext} onBack={handleBack} />))
          }
          {currentChild===3 && <Otp onBack={handleBack}/>}
          {/* <button onNext={handleNext}>student</button>
          <button onClick={toggled}>college</button> */}
          {/* {show?<Form onSubmit={toggled}/>:<Otp onSubmit={toggled}/>} */}

          {/* {show?<Student/>:<College/>} */}

        </div>

      </div>
    </div>
  )

}
export default Signup
