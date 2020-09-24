import React, { Component } from "react";

const HOC = (HeadOfComponent, data) => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: data,
      };
    }

    render() {
      return <HeadOfComponent data={this.state.data} {...this.props} />;
    }
  };
};

export default HOC;
