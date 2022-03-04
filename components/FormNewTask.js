import React, { useState, useContext } from "react";
import Button from "./Button";
import { TodoContext } from "../context/TodoContext";

const FormNewTask = () => {
  const { newTask, tarea, actualizarState } = useContext(TodoContext);

  const { nombre, descripcion } = tarea;

  return (
    <form
      onSubmit={newTask}
      className="flex flex-col justify-center items-center p-5 w-full"
    >
      <input
        className="w-full m-5"
        name="nombre"
        type="text"
        placeholder="Nombre de tarea"
        value={nombre}
        onChange={actualizarState}
      />
      <textarea
        className="w-full"
        name="descripcion"
        id="descripcion"
        cols="30"
        rows="10"
        value={descripcion}
        onChange={actualizarState}
        placeholder="Tarea..."
      ></textarea>
      <Button label="Crear" />
    </form>
  );
};

export default FormNewTask;
