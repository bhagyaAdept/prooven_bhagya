import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import { connect } from 'react-firebase';

var config ={
    apiKey : "",
    authDomain: "",
    databaseUrl: "https://us-central1-php-test-2accd.cloudfunctions.net/helloWorld",
    storageBucket: ""
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
