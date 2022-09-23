import React, { Component } from 'react'

export default class MoodTracker extends Component {
    // PRE- REACT v16
    // what should happen when the component is first created
    // constructor() {
    //     // calls the parent class's constructor
    //     super()
    //     this.state = {
    //         // info goes here
    //     }
    // }

    // POST- REACT v16
    state = {
        moodPoints: 1 // creates key/value pair in this.state
    }
    
    // <button onclick="doSomething()">  </button>  -- HTML
    // <button onClick={this.doSomething}> </button> -- React
    
    // in order to change state, we must use the setState() method.
    // there are multiple ways to utilize setState, we will be using a callback function.
    increaseMood = () => {
        this.setState((previousState, props) => {
            return {
                moodPoints: previousState.moodPoints + 1
            }
        }, () => console.log(this.state))
       
    }

    handleSetToTen = () => {
        // when setting a value not dependent on previous state, we don't need prevState.
        this.setState({
            moodPoints: 10
        })
    }


    render() {
        console.log(this)
        return (
            <div>
                <p>On a scale of 1-10</p>
                <p> You are this happy: {this.state.moodPoints}</p>
                <button onClick={this.increaseMood}> Cheer up! </button>
                <button onClick={this.handleSetToTen}> MAXIMUM CHEER!!!</button>
            </div>
        )
    }
}

