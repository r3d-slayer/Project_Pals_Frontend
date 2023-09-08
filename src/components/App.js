
import Home from './Home';
import Navbar from './Navbar';
import Signup from './Signup';
import './style/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      </Routes>
    </div>

    </Router>
  );
}

export default App;
