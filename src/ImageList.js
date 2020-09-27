import React from "react";

class ImageList extends React.Component {
  render() {
    return this.props.contentList.map(({ description, id, urls }) => {
      // return <img alt={description} key={id} src={urls.regular} />;
      return (
        <div
          className="col-md-4"
          key={id}
          className="card"
          style={{ width: "18rem" }}
        >
          <img className="card-img-top" key={id} src={urls.regular} alt="" />
          <div className="card-body">
            <p className="card-text">{description}</p>
          </div>
        </div>
      );
    });
    // <div className="card" style={{ width: "18rem" }}>
    //   <img className="card-img-top" alt="" />
    //   <div className="card-body">
    //     <p className="card-text">
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </p>
    //   </div>
    // </div>
  }
}

export default ImageList;
