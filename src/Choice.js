import React from "react";
class Choice extends React.Component {
  constructor() {
    super();
    this.state = {
      HomeLink: "",
    };
  }
  onClickHome() {
    this.props.changeHomeInfo(this.state.HomeLink);
  }
  render() {
    return (
      <div className="ui card">
        <div className="content">{this.props.children}</div>
        <div className="extra content">
          <div className="ui two buttons">
            <input
              type="text"
              value={this.state.HomeLink}
              onChange={(e) => {
                this.setState({ HomeLink: e.target.value });
              }}
            />
            <div
              className="ui basic green button"
              onClick={this.onClickHome.bind(this)}
            >
              Approve
            </div>
            <div
              onClick={this.props.alertFuntion}
              className="ui basic red button"
            >
              Reject
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Choice;
