import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../my_components/Navbar.css';
import '../my_components/Footer.css';
import Logo from '../images/logo.png';

import  'jquery';
function Transcript() {
  return <h2>Users</h2>;
}
class Navbar extends Component{
    render(){
        return(
          
            <div>
              <div className="container-fluid">
              <nav className="navbar header-top fixed-top navbar-expand-lg  ">
      
                  <div className="container mg_5_top">
                  <div className="col-lg-1 col-md-1 col-sm-2 col-xs-6">
                  
                  <ul className="nav">   
                                    
                     <li className="dropdown">
                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown"> <p id="hexagon" className="toggle_icon"><i className="fa fa-bars"></i></p> </Link>
                          <ul className="dropdown-menu">
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/login"}>Login</Link></li>
                            <li><Link to={"/signup"}>Signup</Link></li>
                            <li><Link to={"/signin"}>Signin</Link></li>
                            <li><Link to={"../transcript"}>Transcript</Link></li>
                           
                            
                          </ul>
                    </li>
                 </ul>   
                
                  </div>
            
           
        <div className="col-lg-9 col-md-9 col-sm-7 "></div>{/* col-lg-9 col-md-9 col-sm-2 */}
         <div className="col-lg-2 col-md-2 col-sm-3 col-xs-6">
         <center><Link className="navbar-brand" to="/"> 
            <img src={ Logo } alt="Logo" /> </Link></center>
         </div>{/* col-lg-2 col-md-2 col-sm-4 col-xs-6 */}
         
      </div>{/* container */}
    



    </nav>{/* nav */}
</div>{/* container fluid */}
</div>

        );
    }
}

export default Navbar;