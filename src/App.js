import React, { Component } from 'react';

import './App.css';
import  Home from './pages/Home.js';
import  Transcript from './pages/Transcript.js';
import  Login from './pages/Login.js';
import  Signup from './pages/Signup.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signin from './pages/Signin.js';
class App extends Component {
  render(){
    return(
     <Router>
         <div>           
            <Route exact path ="/" component = { Home } />
            <Route exact path ="/Transcript" component = { Transcript } /> 
            <Route exact path ="/Login" component = { Login } />   
            <Route exact path ="/Signup" component = { Signup } />  
            <Route exact path ="/Signin" component = { Signin } />     
      </div>
      </Router>
    
    );
  }
}
 

export default App;