import React from "react";
import Choice from "./Choice";
import Details from "./Details";
import faker from "faker";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      HOMELINK: "INitial State",
    };
  }
  getAlert() {
    alert("dsfdsgsdfsdfsdfsd");
  }

  changeHomeLink(name) {
    this.setState({
      HOMELINK: name,
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.HOMELINK}</h3>
        <Choice
          alertFuntion={this.getAlert}
          changeHomeInfo={this.changeHomeLink.bind(this)}
        >
          <Details
            author="Sam"
            timeAgo="Today at 4:45PM"
            content="Nice blog post"
            avatar={faker.image.avatar()}
          />
        </Choice>
      </div>
    );
  }
}

export default App;
