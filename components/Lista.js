import React, { useContext } from "react";
import Tareas from "./Tareas";
import { TodoContext } from "../context/TodoContext";

const Lista = () => {
  const { usuario } = useContext(TodoContext);
  return (
    <>
      <div className="flex flex-col justify-start bg-slate-300 h-screen w-3/4">
        <h1 className="text-2xl text-center p-10">Lista de Tareas</h1>
        <h2 className="text-xl text-center mb-5">
          Bienvenido {usuario.user.nombre}
        </h2>
        <Tareas />
      </div>
    </>
  );
};

export default Lista;
