import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import About from './Components/About';


import Navbar1 from './Components/NavBar1';
import Home from './Components/Home';
import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';

import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// let name='vinay';
function App() {
  return (
    // <Router>
    //   <Navbar title='react application' />
    //   <div className="container">
    //   <Routes>
    //       <Route exact path="/about" element={<About />} />
    //       <Route exact path="/" element={<Textarea/>} />
    //     </Routes>
    //   </div>

    // </Router>

    <Router>
    <Navbar1 />
    <Routes>
      <Route exact path="/" element={<Home/>}  />
      <Route exact path="/all" element={<AllUsers/>}  />
      <Route exact path="/add" element={<AddUser/>}  />
      <Route exact path="/edit/:id" element={<EditUser/>}  />
      {/* <Route component={NotFound} /> */}
    </Routes>
  </Router>
  );
}

export default App;
