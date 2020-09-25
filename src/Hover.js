import React from "react";
class Hover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  hoverIncrement = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const { count } = this.state;
    return <h2 onMouseOver={this.hoverIncrement}>Hover Me {count}</h2>;
  }
}

export default Hover;
