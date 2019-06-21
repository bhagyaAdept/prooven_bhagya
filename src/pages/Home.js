import React, { Component } from 'react';
import Navbar from '../my_components/Navbar.js';
import Footer from '../my_components/Footer.js';
import '../my_components/Navbar.css';
import '../my_components/Footer.css';
class Home extends Component{
    render(){
        return(
            <div>
                <Navbar>
                </Navbar>
                <div className="container">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <h1>Good Morning, John</h1>
                </div>{/* end of col-6 */}

                <div className="col-lg-3 col-md-3 col-sm-1 col-xs-12"></div>

                <div className="col-lg-2 col-md-2 col-sm-5 col-xs-12">
                <div className="col-md-8 col-md-8 col-sm-6 col-xs-12 user-image text-center">
                   <img src="https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png" alt="user" className="rounded-circle" />
                </div>{/* end of col-md-8 */}
                <div className="col-md-4 col-md-4 col-sm-6 col-xs-12 user-image text-center">
                <h1>Profile</h1>
                </div>{/* end of col-md-4 */}
                </div>{/* end of col-2 */}

               
                </div> {/* end of container */} 
<Footer></Footer>
            </div> 
                
        );
    }
}
export default Home;