import React from "react";
import Tareas from "./Tareas";

const Lista = () => {
  return (
    <>
      <div className="flex flex-col justify-start bg-slate-300 h-screen w-3/4">
        <h1 className="text-2xl text-center p-10">Lista de Tareas</h1>
        <Tareas />
      </div>
    </>
  );
};

export default Lista;
