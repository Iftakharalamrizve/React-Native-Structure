import React from "react";
import Stock from "./Stock";
import UserList from "./UserList";
import HOC from "./HOC";

const StocksData = [
  {
    id: 1,
    name: "TCS",
  },
  {
    id: 2,
    name: "Infosys",
  },
  {
    id: 3,
    name: "Reliance",
  },
];
const UsersData = [
  {
    id: 1,
    name: "Krunal",
  },
  {
    id: 2,
    name: "Ankit",
  },
  {
    id: 3,
    name: "Rushabh",
  },
];

const Stocks = HOC(Stock, StocksData);

const Users = HOC(UserList, UsersData);

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Users />
        <Stocks />
      </React.Fragment>
    );
  }
}

export default App;
