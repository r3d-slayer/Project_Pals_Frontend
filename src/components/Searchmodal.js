import React, { useState } from 'react'
import style from './style/Searchmodal.css'

const Searchmodal = (props) => {
// console.log(props.searchresult.full_name)
// style={ props.modalResult ? style: {display:'none'}}
  const {realresult} = props;
  console.log(realresult?.full_name);
  console.log(props.modalResult);
  return(
  <div className="modal" style={ props.modalResult ? style: {display:'none'}}>
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
