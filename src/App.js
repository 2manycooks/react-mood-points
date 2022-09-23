import React, { Component } from 'react'
import './App.css';
import MoodTracker from './MoodTracker'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MoodTracker prop={'I SHALL NEVER CHANGE (unless gabe says so)'}/>
      </div>
    );
  }
}

export default App;