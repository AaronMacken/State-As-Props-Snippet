import React, { Component } from "react";
import PropComponent from "./PropComponent";
import "./App.css";

export class App extends Component {
  // initialize some state here
  // state is some value of your application that can change
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // create a function that modifies this component's state by calling the set State method
  // we can pass this function as a prop to other components
  // by passing a function that modifies this components state to a child component
  // we can modify this component's state (the parent component) from the child component

  incrementState = () => {
    // always make sure to pass in an object in curly braces when
    // calling the setState method
    // this is how you create a new state object instead of directly modifying your
    // old state (important! NEVER DIRECTLY MODIFY YOUR STATE! Always create a brand new state object)

    // we give the new object a key of count (which is what we called it in our state constructor)
    // we then say the value of it, is what it currently is (this.state.count)
    // +1
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className="appComponent">
        <h1>I am the APP component</h1>
        <PropComponent
          // passing a prop called myPropName that has a string value
          myPropName="I am a string passed in as a prop from the App component"
          // passing a prop called increment that calls the incrementState
          // function defined in this class
          increment={this.incrementState}
          // pass the App component's STATE as a PROP
          appCount={this.state.count}
        />
      </div>
    );
  }
}

export default App;
