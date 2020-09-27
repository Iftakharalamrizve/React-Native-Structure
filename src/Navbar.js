import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: "",
    };
  }

  render() {
    const searchItem = (event) => {
      event.preventDefault();
      this.props.onSubmit(this.state.item);
    };
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">Logo</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse pull-right"
          id="navbarSupportedContent"
        >
          <form onSubmit={searchItem} className="form-inline my-2 my-lg-0 ">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={this.state.item}
              onChange={(e) => this.setState({ item: e.target.value })}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
