import React from "react";
import FormNewTask from "./FormNewTask";

const SideMenu = () => {
  return (
    <>
      <div className="flex flex-col justify-start bg-slate-800 h-screen w-1/4">
        <h1 className="text-2xl text-center text-white p-10">
          Crear nueva tarea
        </h1>
        <FormNewTask />
      </div>
    </>
  );
};

export default SideMenu;
