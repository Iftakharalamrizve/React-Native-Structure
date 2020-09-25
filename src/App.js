import React from "react";
import CounteruseState from "./CounteruseState";
import CounterPrevState from "./CounterPrevState";
import UseStateObject from "./useStateObject";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CounteruseState />
        <CounterPrevState />
        <UseStateObject />
      </React.Fragment>
    );
  }
}

export default App;
