import React, { Component } from 'react';
import Navbar from '../my_components/Navbar.js';
import Footer from '../my_components/Footer.js';

class Home extends Component{
    render(){
        return(
            <div class="body_offwhite">
                <Navbar>
                </Navbar>
                <div className="container my_container">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                <h1>Good Morning, John</h1>
                </div>{/* end of col-6 */}

                <div className="col-lg-3 col-md-3 col-sm-1 col-xs-12"></div>

                <div className="col-lg-2 col-md-2 col-sm-5 col-xs-12">
                <div className="col-lg-6 col-md-6 col-md-6 col-sm-6 col-xs-6 user-image text-center">
                  <i className = "fa fa-user-circle-o"></i>
                </div>{/* end of col-md-8 */}
                <div className="col-lg-6 col-md-6 col-md-6 col-sm-6 col-xs-6 user-image ">
                <h1>Profile</h1>
                </div>{/* end of col-md-4 */}
                </div>{/* end of col-2 */}
                <br /> <br />
                </div>{/* end of col-12 */} 
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 "><br /><br /><br /></div>   
                {/* --------------------end of profile--------------------------- */}          
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                   
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                        <h1><i className="fa fa-file-text-o"></i></h1>
                        <h3>Transcripts</h3>
                    </div>{/* end of col-3 */}

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                        <h1><i className="fa fa-envelope-o"></i></h1>
                        <h3>Request Inbox</h3>
                    </div>{/* end of col-3 */}

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                        <h1><i className="fa fa-users"></i></h1>
                        <h3>users</h3>
                    </div>{/* end of col-3 */}

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                        <h1><i className="fa fa-home"></i></h1>
                        <h3>marketplace</h3>
                    </div>{/* end of col-3 */}

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                        <h1><i className="fa fa-line-chart"></i></h1>
                        <h3>analytics</h3>
                    </div>{/* end of col-3 */}

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle  text-center">
                        <h1><i className="fa fa-bell-o "></i><span className="icon_circle_alert">1</span></h1>
                        <h3>alrets</h3>
                    </div>{/* end of col-3 */}

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                        <h1><i className="fa fa-shield"></i></h1>
                        <h3>security</h3>
                    </div>{/* end of col-3 */}

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                        <h1><i className="fa fa-user"></i></h1>
                        <h3>contacts</h3>
                    </div>{/* end of col-3 */}
                     
                </div>{/* end of col-12 */} 
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 recent_activity">
                    <h2>Recent Activity <span><i className="fa fa-arrow-right"></i></span></h2>
                   
                    <table className="table" cellSpacing="0">
                                    
                                    <tbody>
                                        <tr>
                                            <td className="activity_date">May 23</td>
                                            <td><span className="activity_heading">SQU*SQ *Press scottsda</span><p><span className="activity_pending">pending</span> Authorization</p></td>
                                            <td>- $ 2.70</td>
                                        </tr>
                                        <tr>
                                        <td className="activity_date">May 21</td>
                                        <td><span className="activity_heading">chevron/bro re</span><p> payment - paypal cash card</p></td>
                                            <td ><h5 className="profit">+ $ 15.00 </h5></td>
                                        </tr>
                                        <tr>
                                        <td className="activity_date">May 19</td>
                                        <td><span className="activity_heading">wizent ach</span><p> direct deposit</p></td>
                                        <td>- $ 2.70</td>
                                        </tr>
                                        <tr>
                                        <td className="activity_date">May 21</td>
                                        <td><span className="activity_heading">chevron/bro re</span><p> payment - paypal cash card</p></td>
                                        <td>- $ 2.70</td>
                                        </tr>
                                        <tr>
                                        <td className="activity_date">May 21</td>
                                        <td><span className="activity_heading">chevron/bro re</span><p> payment - paypal cash card</p></td>
                                        <td>- $ 2.70</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className="btn my_btn">See more activity</button>
                </div> {/* end of col-6 */}<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                    <br /><br />
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 icons_resources ">
                <h2>Resources</h2><br></br>
                    <ul>
                        <li>  <p><i className="fa fa-file"></i> My Revenue</p>  </li>
                        <li>  <p><i className="fa fa-newspaper-o"></i> Recent news</p>  </li>
                        <li>  <p><i className="fa fa-truck"></i>Shipping request</p>  </li>
                    </ul>
                  
                                           
                    </div>{/* end of col-6 */}
                    
                </div>
                </div> {/* end of col-12 */}
                </div> {/* end of container */} 
<Footer></Footer>
            </div> 
                
        );
    }
}
export default Home;