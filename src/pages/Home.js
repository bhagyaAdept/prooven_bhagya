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
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                <h1>Good Morning, John</h1>
                </div>{/* end of col-6 */}

                <div className="col-lg-3 col-md-3 col-sm-1 col-xs-12"></div>

                <div className="col-lg-2 col-md-2 col-sm-5 col-xs-12">
                <div className="col-md-8 col-md-8 col-sm-6 col-xs-12 user-image text-center">
                  <i className = "fa fa-user-circle-o"></i>
                </div>{/* end of col-md-8 */}
                <div className="col-md-4 col-md-4 col-sm-6 col-xs-12 user-image ">
                <h1>Profile</h1>
                </div>{/* end of col-md-4 */}
                </div>{/* end of col-2 */}
                <br /> <br />
                </div>{/* end of col-12 */} 
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                   
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                        <h1><i class="fa fa-file-text-o"></i></h1>
                        <h3>Transcripts</h3>
                    </div>{/* end of col-3 */}

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                        <h1><i class="fa fa-envelope-o"></i></h1>
                        <h3>Request Inbox</h3>
                    </div>{/* end of col-3 */}

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                        <h1><i class="fa fa-users"></i></h1>
                        <h3>users</h3>
                    </div>{/* end of col-3 */}

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                        <h1><i class="fa fa-home"></i></h1>
                        <h3>marketplace</h3>
                    </div>{/* end of col-3 */}

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                        <h1><i class="fa fa-line-chart"></i></h1>
                        <h3>analytics</h3>
                    </div>{/* end of col-3 */}

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle  text-center">
                        <h1><i class="fa fa-bell-o "></i><span class="icon_circle_alert">1</span></h1>
                        <h3>alrets</h3>
                    </div>{/* end of col-3 */}

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                        <h1><i class="fa fa-shield"></i></h1>
                        <h3>security</h3>
                    </div>{/* end of col-3 */}

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                        <h1><i class="fa fa-user"></i></h1>
                        <h3>contacts</h3>
                    </div>{/* end of col-3 */}
                     
                </div>{/* end of col-12 */} 
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 recent_activity">
                    <h2>Recent Activity <span><i class="fa fa-arrow-right"></i></span></h2>
                   
                    <table class="table" cellspacing="0">
                                    
                                    <tbody>
                                        <tr>
                                            <td class="activity_date">May 23</td>
                                            <td><span class="activity_heading">SQU*SQ *Press scottsda</span><p><span class="activity_pending">pending</span> Authorization</p></td>
                                            <td>- $ 2.70</td>
                                        </tr>
                                        <tr>
                                        <td class="activity_date">May 21</td>
                                        <td><span class="activity_heading">chevron/bro re</span><p> payment - paypal cash card</p></td>
                                            <td ><h5 class="profit">+ $ 15.00 </h5></td>
                                        </tr>
                                        <tr>
                                        <td class="activity_date">May 19</td>
                                        <td><span class="activity_heading">wizent ach</span><p> direct deposit</p></td>
                                        <td>- $ 2.70</td>
                                        </tr>
                                        <tr>
                                        <td class="activity_date">May 21</td>
                                        <td><span class="activity_heading">chevron/bro re</span><p> payment - paypal cash card</p></td>
                                        <td>- $ 2.70</td>
                                        </tr>
                                        <tr>
                                        <td class="activity_date">May 21</td>
                                        <td><span class="activity_heading">chevron/bro re</span><p> payment - paypal cash card</p></td>
                                        <td>- $ 2.70</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button class="btn my_btn">See more activity</button>
                </div> {/* end of col-6 */}
                </div> {/* end of col-12 */}
                </div> {/* end of container */} 
<Footer></Footer>
            </div> 
                
        );
    }
}
export default Home;