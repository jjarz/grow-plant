// load es6 modules
// more here: https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// es6 classes
// more here: https://strongloop.com/strongblog/an-introduction-to-javascript-es6-classes/

// Component:
// - let you split the UI into independent, reusable pieces,
// and think about each piece in isolation.
// - Can be pure JavaScript or JSX
class App extends Component {

  // every React Component is required to have a render method
  render() {
    return (
      // JSX syntax
      // React forms a Javascript representation of the actual DOM using this (referred to as the "Virtual DOM")
      // Virtual DOM allows React to compare current Virtual DOM with the previous one, and only updated
      // the parts of the DOM that have changed- https://facebook.github.io/react/img/docs/granular-dom-updates.gif)
      // JSX will be converted to React.createElement https://facebook.github.io/react/docs/react-api.html#createelement
      //  React.createElement(
      //    type,
      //    [props],
      //    [...children]
      //  )
      // See more here: https://facebook.github.io/react/docs/jsx-in-depth.html
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// es6 export
export default App;
