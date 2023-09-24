import React, { useState } from 'react'
import './style/Postitem.css'

const Postitem = (props) => {
    const {post} = props;

    const clicked = () =>{
        // props.showalert1("email has been sent","success");
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
                                    <li id='name'> <div className="circle"></div>Adarsh</li>
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
