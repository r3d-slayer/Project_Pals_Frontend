import React, { useState } from 'react'
import './style/Loginform.css'
import { useNavigate } from 'react-router-dom'

const Loginform = (props) => {
    // const [loggedin, setloggedin] = useState(false);
    let navigate = useNavigate();
    const [credstate, setcredstate] = useState({ email: '', password: '' })

    const changed = (e) => {
        setcredstate({
            ...credstate, [e.target.name]: e.target.value
        })
        console.log(e.target.name);
    }

    const datasend = async (e) => {
        e.preventDefault();
        sessionStorage.removeItem('token');
        try {
            let response = await fetch('https://adarsh8266.pythonanywhere.com/api/accounts/login/', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: credstate.email
                    , password: credstate.password
                })
            })
            // console.log(credstate.email);
            let data = await response.json();
            // console.log(data);
            sessionStorage.setItem('token', data.token.access);
            // props.onSubmit();
            sessionStorage.setItem('msg', data.msg);
            sessionStorage.setItem('username', data.username);
            navigate('/post');
            sessionStorage.setItem('email', credstate.email);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <div className="loginform-main-container">
                <form onSubmit={datasend}>
                    <div className="loginform-container">
                        <label htmlFor="account" id='account'>Login</label>
                        <input type="text" name='email' className="email" onChange={changed} placeholder='Email' />
                        <input type="password" name='password' className="password" onChange={changed} placeholder='Password' />

                        <button type="submit" className="loginform-submit">Next</button>
                        <div className="refer">
                        <a id='refer' href="/signup">
                            <div className="link">
                                Don't have an account?
                                <a id='link' to="/signup">Signup</a>
                            </div>
                        </a>
                    </div>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default Loginform
