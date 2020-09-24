import React from "react";
import TableRow from "./TableRow";
class Stock extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   stocks: [
    //     {
    //       id: 1,
    //       name: "TCS",
    //     },
    //     {
    //       id: 2,
    //       name: "Infosys",
    //     },
    //     {
    //       id: 3,
    //       name: "Reliance",
    //     },
    //   ],
    // };
  }

  tabRow() {
    if (this.props.data instanceof Array) {
      return this.props.data.map((item, i) => {
        return <TableRow obj={item} key={i} />;
      });
    }
  }

  render() {
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Stock Name</td>
              <td>Stock Price</td>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}

export default Stock;
