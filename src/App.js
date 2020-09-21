import React from "react";
import Choice from "./Choice";
import Details from "./Details";
import faker from "faker";

const App = () => {
  return (
    <div>
      <Choice>
        <Details
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Nice blog post"
          avatar={faker.image.avatar()}
        />
      </Choice>
    </div>
  );
};
export default App;
