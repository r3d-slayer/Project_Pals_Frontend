import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style/Post.css'
import addimage from './style/add-on-icon-29.jpg'
import Postitem from './Postitem';

const Post = (props) => {
  //   const initialposts = [
  // {username: 'adarsh', id: 1, title: 'rerg', category: 'ergrggsdfbcs', description: 'projecbfb rfger egerglt', }, 
  // {username: 'adarsh1o1', 'id': 2, title: 'wefwefsdf', category: 'ergrggsefwfwdfbcs', description: 'projecbfb fwefwefwefwefewfwfrfger egerglt', }, 
  // {username: 'adarsh1o1', id: 3, title: 'wefwefsdf', category: 'ergrggsefwfwdfbcs', description: 'projecbfb fwefwefwefwefewfwfrfger egerglt', },

  // {username: 'adarsh1o1', id: 4, title: 'wefwefsdf', category: 'ergrggsefwfwdfbcs', description: 'projecbfb fwefwefwefwefewfwfrfger egerglt', },

  // {username: 'adarsh1o1', id: 5, title: 'wefweffwewwsdf', category: 'ergrggsefwewfw wefwe fwdfbcs', description: 'projecbfb fwefwefuiwhefuihwefwefwefewfwfrfger egerglt', },

  // {username: 'adarsh1o1', id: 6, title: 'wefweffwewwsdf', category: 'ergrggsefwewfw wefwe fwdfbcs', description: 'projecbfb fwefwefuiwhefuihwefwefwefewfwfrfger egerglt',}]
  const initialposts = [];
  const [posts, setposts] = useState(initialposts);
  const token = sessionStorage.getItem('token');
  const fetchallposts = async () => {
    let response = await fetch('http://adarsh8266.pythonanywhere.com/api/core/show-post/', {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    let json = await response.json();
    // console.log(json)
    setposts(json);
    // return json;
  }
  let navigate = useNavigate();

  // const [alert1,setalert1] = useState(null)
  const { showalert } = props;

  // window.addEventListener('load',()=>{
  //   const json1 = fetchallposts();
  //   setposts({...posts,json1})
  //   console.log(posts);
  // })
  useEffect(() => {

    if (sessionStorage.getItem('msg') !== "login success") {
      return navigate('/login');
    }
    fetchallposts();

  })
  return (
    <div className='post-main-container'>
      <div className="post-submain-container">


        <div className="post-first-container">
          <div className="post-subfirst-container">
            <div className="post-subsubfirst-container">
              <ul>
                <li>
                  <label htmlFor="greetings" id="post-heading">Hello, Shivam</label>
                </li>
                <li>
                  what's on your mind today?
                </li>
              </ul>
            </div>
            <div className="post-subsubsecond-container">
              <ul>
                <li>
                  <div className="createpost-subsubsecond-container">
                    <img src={addimage} alt="an addition sign" />
                    <label htmlFor="greetings" id="createpost-heading">Create Posts</label>

                  </div>
                </li>
                <li>
                  Got some awesome projects? Find the best team to team up now!!
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className="post-secondmain-container">
          <div className="all-posts">
            {/* {posts.map((element) => {
                    return <Notesitem post={element} />
                })} */}
            {/* {posts.map((element) => (
              <Postitem key={element.id} showalert={showalert} post={element} />
            ))} */}

            {Array.isArray(posts) && posts.length > 0 ? (
              posts.map((element) => (
                <Postitem key={element.id} showalert={props.showalert} post={element} />
              ))
            ) : (
              <p>No posts available</p>
            )}


          </div>
        </div>
      </div>
      {/* <div className="post-second-container">
        Hello
      </div> */}
    </div>

  )

}


export default Post
