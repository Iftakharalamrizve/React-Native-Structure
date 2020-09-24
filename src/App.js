import React from "react";
import Choice from "./Choice";
// import Choice from "./Choice";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Rizve",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Rizve",
      });
    }, 2000);
  }
  render() {
    console.log("Sdfsdfsdfdsfsdfdsfdsds");
    return (
      <>
        <h2>App Component Render </h2>
        <Choice name={this.state.name} />
      </>
    );
  }
}

export default App;
