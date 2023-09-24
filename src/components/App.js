import Error from './Error';
import Home from './Home';
import Navbar from './Navbar';
import Signup from './Signup';
import Login from './Login';
import './style/App.css';
import { Routes, Route, useLocation} from 'react-router-dom';
import Post from './Post';
import Alert from './Alert';
import { useState } from 'react';

function App() {
  const[alert,setalert] = useState(null);
  
  const showalert = (message,type) =>{
    setalert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
      setalert(null);
    },1500)
  }

  const location =  useLocation();
  return (

    <div className="App">
      <Navbar/>
      {/* {alert !== null && <Alert alert={alert} />}  */}
      {alert ? (
          <Alert alert={alert} />
        ) : (
        <div className="alert-placeholder" style={location.pathname ==='/post'?{height:'40px'}:{display:"none"}}/>
        )}
      <Routes>
        <Route path='*' element={<Error/>}/>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/post' element={<Post showalert={showalert}/>}/>
      </Routes>
    </div>

  );
}

export default App;
