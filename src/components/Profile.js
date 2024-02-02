import React, { useEffect, useState } from 'react';
import './style/Profile.css';
import { useNavigate } from 'react-router-dom';
import Userpost from './Userpost';

const Profile = (props) => {
  // Assuming posts is defined somewhere in your component's state or props
  const initialposts = [];
  const [posts, setposts] = useState(initialposts);
  const token = sessionStorage.getItem('token');
  const fetchallposts = async () => {
    let response = await fetch('http://adarsh826.pythonanywhere.com/api/core/show-post/', {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    let json = await response.json();
    // console.log(json)
    setposts(json);
  }
  let navigate = useNavigate();
  const { showalert } = props;

  useEffect(() => {

    if (sessionStorage.getItem('msg') !== "login success") {
      return navigate('/login');
    }
    fetchallposts();

  }, [])

  const clicked = async() =>{

    const emails = posts.email;

    let response = await fetch('http://adarsh826.pythonanywhere.com/api/core/connect/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json','Authorization': `Bearer ${token}` },
        body: JSON.stringify({
            email: emails
        })
      });
      let json = await response.json();
      console.log(json);
    props.showalert('Email has been sent', 'success');
    // navigate("/message")
}
  return (
    <div className='profile-main-container'>
      <div className="profile-first-container">
        <div className="account-image">
          
        </div>
        <div className="profile-details">
          <ul>
            <li>
              <h1>Shivam Tanwar</h1>
            </li>
            <li>
              <h3>Frontend Developer</h3>
            </li>
            <li className='connect-button'>
              <button onClick={clicked}>Connect</button>
            </li>
          </ul>
        </div>
        <div className="profile-biodetails">
          <div className="profile-collegename">
            <ul>
              <li>
                <div className="circle"></div>
              </li>
              <li>
                Dronacharya College of Engineering
              </li>
            </ul>
          </div>
          <h4>About</h4>
          <div className="profile-bio">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quaerat quasi minima nisi aliquid animi blanditiis nesciunt esse ea, culpa cumque, atque ex nihil labore.
          </div>
        </div>
      </div>
      <h2 id='POSTS'>Posts:</h2>
      <div className="post-secondmain-container">
        <div className="all-posts">
          {/* {Array.isArray(posts) && posts.length > 0 ? (
            posts.map((element) => (
              <Userpost key={element.id} post={element} />
            ))
          ) : (
            <p>No posts available</p>
          )} */}
          <Userpost/>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
