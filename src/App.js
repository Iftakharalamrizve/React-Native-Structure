import React from "react";
import Hover from "./Hover";
import Click from "./Click";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Click />
        <Hover />
      </React.Fragment>
    );
  }
}

export default App;
