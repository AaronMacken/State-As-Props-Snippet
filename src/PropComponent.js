import React, { Component } from "react";
import PropTypes from "prop-types";

export class PropComponent extends Component {
  render() {
    // create variables that points to the destructured
    // myPropName prop and increment function (also a prop)
    let { myPropName, increment } = this.props;
    // same as this.props.myPropName or this.props.increment
    // except now we can just write myPropName or increment instead of
    // typing out this.props.myPropName or this.props.increment every single time

    return (
      <div className="propComponent">
        <h3>I am the PROP Component</h3>

        {/* using the ternary operator to conditionally render a
          div based on whether or not a prop was passed in
          ternary operator is essentially the same thing as an if else statement
        */}
        {myPropName ? (
          <div>
            <h4>A prop was passed in from App</h4>
            <h5>Prop Value: {myPropName}</h5>
          </div>
        ) : (
          <h4>No prop was passed in from app</h4>
        )}
        {/* using the myPropName (coming from destructured this.props) */}

        <br />
        <h4>We passed the app component's state as a prop to this component</h4>
        <h5>
          The app component's state will change, every time it does, the value
          of the prop changes as well
        </h5>
        <h5>App state current value: {this.props.appCount}</h5>
        <button onClick={increment}>
          Click me to increment state from a child component
        </button>
      </div>
    );
  }
}

PropComponent.propTypes = {
  myPropName: PropTypes.string.isRequired,
  increment: PropTypes.func.isRequired,
  appCount: PropTypes.number.isRequired,
};

export default PropComponent;
