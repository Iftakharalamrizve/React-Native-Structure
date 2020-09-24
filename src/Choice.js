import React from "react";
class Choice extends React.PureComponent {
  render() {
    console.log("Choice COmponent Render");
    return <li>{this.props.name}</li>;
  }
}

export default Choice;
