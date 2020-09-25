import React from "react";
import CounteruseState from "./CounteruseState";
import CounterPrevState from "./CounterPrevState";
import UseStateObject from "./UseStateObject";
import UseStateArray from "./UseStateArray";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <CounteruseState />
        <CounterPrevState />
        <UseStateObject /> */}
        <UseStateArray />
      </React.Fragment>
    );
  }
}

export default App;
