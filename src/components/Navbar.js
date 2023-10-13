import React from 'react'
import style from './style/Navbar.css'
import { useLocation, useNavigate } from 'react-router-dom';
import realimage from './style/PartnurUp.png'
import searchbtn from './style/search-interface-symbol.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    let navigate = useNavigate();
    const logout = () => {
        sessionStorage.clear();
        navigate('/')
    }
    // style={location.pathname === '/signup' ? { display: 'none' } : style}
    let location = useLocation();

    return (
        <div className='nav-main-container' style={location.pathname === '/' || location.pathname === '/post' ? style : { display: 'none' }} >
            <div className="nav-first-container">
                <ul>
                    <img src={realimage} width={'50vw'} alt="an 3d art view" />
                    <li id='Logo'>
                        Project Pals
                    </li>
                    <li>
                        <div className="nav-search"><input type="text" placeholder='Search Project Category....' /><img src={searchbtn} alt="button for searching" /></div>
                    </li>
                    <li>
                        Home
                    </li>
                    <li>
                        About us
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        Contact Us
                    </li>

                    {!(sessionStorage.getItem('token')) ?
                        <div className='signup-button'>
                            <ul>
                                <li className="nav-signup">
                                    <Link to={'/signup'}><button className='nav-signup'>Sign Up</button></Link>
                                </li>
                                <li className="nav-signup">
                                    <Link to={'/login'}><button className='nav-signup'>Login</button></Link>
                                </li>
                            </ul>
                        </div>

                        : (<li className='nav-signup'><button className='nav-signup' onClick={logout}>Logout</button></li>)}

                </ul>
            </div>

            {/* <hr /> */}
        </div>
    )
}

export default Navbar
