import React from "react";
class Choice extends React.Component {
  render() {
    return <li>{this.props.dataList.title}</li>;
  }
}

export default Choice;
