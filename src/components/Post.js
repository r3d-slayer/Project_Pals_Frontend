import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style/Post.css'
import addimage from './style/add-on-icon-29.jpg'
import Postitem from './Postitem';

const Post = (props) => {

  let navigate = useNavigate();

  // const [alert1,setalert1] = useState(null)
  const { showalert } = props;

  useEffect(() => {

    if (sessionStorage.getItem('msg') !== "login success") {
      return navigate('/login');
    }

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
            <Postitem showalert={showalert} />
            <Postitem showalert={showalert} />

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
