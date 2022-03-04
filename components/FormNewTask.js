import React, { useState } from "react";
import Button from "./Button";

const FormNewTask = () => {
  const [tarea, setTarea] = useState({
    nombre: "",
    descripcion: "",
    estatus: false,
  });

  const { nombre, descripcion } = tarea;

  const actualizarState = (e) => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/tareas";
      const respuesta = await fetch(url, {
        method: "POST",
        body: JSON.stringify(tarea),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resultado = await respuesta.json();
    } catch (error) {
      console.log(error);
    }

    //Reiniciar el form
    setTarea({
      nombre: "",
      descripcion: "",
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
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
