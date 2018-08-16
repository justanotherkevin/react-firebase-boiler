import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { DB_CONFIG } from './config/firebase_config';
import firebase from 'firebase';

try {
    firebase.initializeApp(DB_CONFIG);
  } catch (e) {
    console.log("firebare init error")
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
