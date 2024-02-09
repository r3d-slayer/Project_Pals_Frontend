import React, { useState } from 'react'
import style from './style/Searchmodal.css'
import { useNavigate } from 'react-router-dom';

const Searchmodal = (props) => {
// console.log(props.searchresult.full_name)
// style={ props.modalResult ? style: {display:'none'}}
  const {realresult} = props;
  const navigate = useNavigate();

  const handleUsernameClick = () => {
    if (realresult?.username) {
      sessionStorage.setItem('username', realresult.username);
      navigate('/user-profile');
      
    }
  };


  return(
  <div className="modal" style={ props.modalResult ? style: {display:'none'}} onClick={handleUsernameClick}>
    <div className="modal-main-container">
      <div className="modal-first-container">
        <div className="profile-image">
          
        </div>
        <div className="modal-username">
          <p>{realresult?.full_name}</p>
          <p id='search-username'>{realresult?.username}</p> 
        </div>
      </div>
    </div>
  </div>
  
)}

export default Searchmodal
