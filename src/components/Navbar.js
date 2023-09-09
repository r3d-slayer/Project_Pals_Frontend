import React from 'react'
import style from './style/Navbar.css'
import { useLocation } from 'react-router-dom';
import realimage from './style/PartnurUp.png'
import searchbtn from './style/search-interface-symbol.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    // style={location.pathname === '/signup' ? { display: 'none' } : style}
    let location = useLocation();
    
    return (
        <div className='nav-main-container'  style={location.pathname === '/signup' ? { display: 'none' } : style} >
            <div className="nav-first-container">
                <ul>
                    <img src={realimage} width={'50vw'} alt="an 3d art view" />
                    <li id='Logo'>
                        PartnurUp
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
                    <li className='nav-signup'>
                        <Link to={'/signup'}><button>Sign Up</button></Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar
