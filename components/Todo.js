import React from "react";
import Lista from "./Lista";
import SideMenu from "./SideMenu";

const Todo = () => {
  return (
    <div className="flex flex-row">
      <SideMenu />
      <Lista />
    </div>
  );
};

export default Todo;
