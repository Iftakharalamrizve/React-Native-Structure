import React from "react";
import Choice from "./Choice";
class App extends React.Component {
  render() {
    var infoList = [
      {
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
          "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        title: "qui est esse",
        body:
          "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
      {
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body:
          "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      },
    ];

    var InfoListDom = infoList.map((item, i) => {
      return <Choice dataList={item} key={i} />;
    });
    return (
      <div>
        <ul className="ui list">{InfoListDom}</ul>
      </div>
    );
  }
}

export default App;
