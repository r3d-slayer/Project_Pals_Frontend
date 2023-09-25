import React, { useState } from 'react'
import './style/Postitem.css'

const Postitem = (props) => {
    const {post} = props;
    const token = sessionStorage.getItem('token');

    const clicked = async() =>{
        // console.log(sessionStorage.getItem('email'));
        const emails = post.email;
        // const emails = sessionStorage.getItem('email');
        // props.showalert1("email has been sent","success");\
        console.log(post.email);
        let response = await fetch('http://adarsh8266.pythonanywhere.com/api/core/connect/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json','Authorization': `Bearer ${token}` },
            body: JSON.stringify({
                email: emails
            })
          });
          let json = await response.json();
          console.log(json);
        props.showalert('Email has been sent', 'success')
    }

    return (
        <div className='postitem-main-container'>
            <div className="postitem-first-container">
                <div className="postitem-subfirst-container">
                    {/* <ul> */}
                        {/* <li> */}
                           
                        {/* </li> */}
                        {/* <li> */}

                            {/* <div className="postitem-userlist"> */}
                                <ul>
                                    <li id='name'> <div className="circle"></div>{post.username}</li>
                                    <li className='connect-button'><button onClick={clicked}>Connect</button></li>
                                </ul>
                            {/* </div> */}
                        {/* </li> */}
                    {/* </ul> */}

                </div>
                {/* <hr /> */}
                <div className="postitem-subsecond-container">
                    <ul>
                        <li id='Title'>{post.title}</li>
                        <li id='Description'>{post.description}</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Postitem
