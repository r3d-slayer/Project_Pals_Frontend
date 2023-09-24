import React from 'react'
import './style/Postitem.css'

const Postitem = (props) => {

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
                        <li id='Title'>Web Designing</li>
                        <li id='Description'>I am looking for a web designer to create an e-commerce website. I am open to any design style and would like to incoporate user registration as a specific feature. Skills and Experience of 1 year is Needed.</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Postitem
