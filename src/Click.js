import React from "react";
class Click extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  countClick = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const { count } = this.state;
    return <button onClick={this.countClick}>Click Me {count}</button>;
  }
}

export default Click;
