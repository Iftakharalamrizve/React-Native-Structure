import React, { useState } from "react";

const useStateObject = () => {
  const [name, setName] = useState({ firstname: "", lastname: "" });

  return (
    <>
      <input
        type="text"
        value={name.firstname}
        onChange={(e) => {
          setName({ ...name, firstname: e.target.value });
        }}
      />
      <input
        type="text"
        value={name.lastname}
        onChange={(e) => {
          setName({ ...name, lastname: e.target.value });
        }}
      />
      <h4>First Name is : {name.firstname}</h4>
      <h4>Last Name is : {name.lastname}</h4>
    </>
  );
};

export default useStateObject;
