import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import ImageList from "./ImageList";
import http from "./Helpers/http";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contentList: [],
    };
  }
  onSearchItem = async (item) => {
    try {
      const response = await http.get("/search/photos", {
        params: { query: item },
        headers: {
          Authorization:
            "Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296",
        },
      });

      this.setState({ contentList: response.data.results });
    } catch (error) {}
  };
  render() {
    return (
      <React.Fragment>
        <Navbar onSubmit={this.onSearchItem} />
        <div className="row">
          <ImageList contentList={this.state.contentList} />
        </div>
        <nav>Total Image({this.state.contentList.length}) </nav>
      </React.Fragment>
    );
  }
}

export default App;
