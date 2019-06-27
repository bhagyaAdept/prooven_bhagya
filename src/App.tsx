import * as React from 'react';
import {Route} from 'react-router-dom';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Dashboard from "./pages/dashboard/dashBoard";
import MyTranscript from "./pages/myTranscript/myTranscript";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Feedback from "./pages/feedback/feedback";
import Notifications from "./pages/notifications/notifications";
class App extends React.Component {
  public render() {
    return (
    <div className="App">
    <Header/> 
    <Route path='/login' exact component={Login}/>
    <Route path='/dashboard' exact component={Dashboard}/>
    <Route path='/myTranscript' exact component={MyTranscript}/>
    <Route path='/signup' exact component={Signup}/>
    <Route path='/feedback' exact component={Feedback}/>
    <Route path='/notifications' exact component={Notifications}/>
    <Footer/> 
    </div>
    );
  }
}

export default App;
