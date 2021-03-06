import React from 'react';
// import axios from "axios";
import '../pages/Login.css';
import Tick from '../images/tick.png';
import Navbar from '../my_components/Navbar.js';
import Footer from '../my_components/Footer.js';
import '../pages/Signup.css';
function Login() {
  
  // componentDidMount() {
  //   axios.get(`https://us-central1-php-test-2accd.cloudfunctions.net/helloWorld`)
  //     .then(res => {
  //       console.log(res);
  //     });
  // }
   return (
    <div class="body_white">
    <Navbar>
    </Navbar>
    <div className="container login-cl my_container">
      <div className="row">
          <div className="col-md-6 align-cl">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
             

                <div className="carousel-inner">
                <div className="item active">
                <div className="text-cap-cl">                  
                <h3>Welcome to Prooven!</h3>
                <h4>Your World. Verified.</h4>
                <img src={Tick} alt="Tick Image" className="img-cl"/>
                <p>Integrity. Trust. Accountability.</p>
                <p>Prooven takes a next-gen approach to verifying information that you come across daily.</p>
                <p>We identify items that are true, false, or somewhere in the middle, then show you how those claims stack up to others.</p>
                </div>
                </div>

                <div className="item">
                <div className="text-cap-cl">
                <h3>Thank you</h3>
                <h4>Your World. Verified.</h4>
                <img src={Tick} alt="Tick Image" className="img-cl"/>
                <p>Integrity. Trust. Accountability.</p>
                <p>Prooven takes a next-gen approach to verifying information that you come across daily.</p>
                <p>We identify items that are true, false, or somewhere in the middle, then show you how those claims stack up to others.</p>
                </div>
                </div>
                </div>
                <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                </div>        
          </div>
          <div className="col-md-6 sign-left">
              <h3 className="center">Sign Up</h3>
                <form action="/action_page.php">
                <div className="form-group">
                <label for="name">Provider Name *</label>
                <input type="text" className="form-control" id="pname" placeholder="Provider Name" name="pname"/>
                </div>
                <div className="form-group">
                <label for="providertype">Provider Type*</label>
                
                <select className="form-control">
                <option value=""  selected>Select your Provider Type</option>
                <option  value="0">Ex. School, University, College, etc.</option>
                <option>Anna University</option>
                </select>
                </div>
                <div className="form-group">
                <label for="sel1">Operating Country*</label>
                <select className="form-control" id="type2">
                <option></option>
                <option>India</option>
                <option>UK</option>
                <option>USA</option>
                </select>
                </div>
                <div className="form-group">
                <label for="name">Your Name *</label>
                <input type="text" className="form-control" id="name" placeholder="Your Name" name="name"/>
                </div> 
                <div className="form-group">
                <label for="name">Your Phone *</label>
                <input type="text" className="form-control" id="phone" name="phone" placeholder="Your Phone " />
                </div>     
                <div className="form-group">
                <label for="email">Your Email *</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Your Email  " />
                </div>
                <div className="form-group">
                <label for="site">Website</label>
                <input type="text" className="form-control" id="web" name="web" placeholder="Website" />
                </div>  
                <div class="form-group">
                <label for="comment">About your business</label>
                <textarea class="form-control" rows="5" id="comment"  placeholder="About your business"></textarea>
                </div>           
                <button type="submit" className="btn btn-default">Sign In</button>
                </form>
                <h3 className="free-cl">Sign Up, It's Free!</h3>
          </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default Login;
