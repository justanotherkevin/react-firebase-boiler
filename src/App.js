import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/app';



class App extends Component {
  constructor(props) {
    super(props)

    // this.app = firebase.initializeApp(DB_CONFIG)
    // this.db = this.app.datbase().ref().child('your_db_name')

    this.state = {
      cms: [{test1:1}],
      thisNum: 0
    }
  }
  componentDidMount() {
    const previousCMS = this.state.cms

    const rootRef = firebase.database().ref('test');
    console.log(rootRef)
    rootRef.child('thisNum').on('value', snap => {
      console.log(snap.val())
      this.setState({
        thisNum: snap.val()
      })
    })
  }
  addToDo(text){
    // this.database.push().set({ text: text})
    // const auth = firebase.auth()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.addToDo('test')}> test</button>
        <h1>{this.state.thisNum}</h1>
      </div>
    );
  }
}

export default App;
