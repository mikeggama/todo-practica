import React, { createContext, useState, useEffect } from "react";

export const TodoContext = createContext();

const TodoProvider = (props) => {
  const [tareas, setTareas] = useState([]);
  useEffect(() => {
    const getTareas = async () => {
      try {
        const url = "http://localhost:4000/tareas";
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setTareas(resultado);
      } catch (error) {
        console.log(error);
      }
    };
    getTareas();
  }, [tareas]);

  return (
    <TodoContext.Provider value={{ tareas, setTareas }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
