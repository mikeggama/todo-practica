import React, { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

export const TodoContext = createContext();

const TodoProvider = (props) => {
  //GENERAL
  const [error, setError] = useState("");
  const router = useRouter();

  //USER SECTION
  const [usuario, setUsuario] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/login";
      const respuesta = await fetch(url, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resultado = await respuesta.json();
      if (resultado.accessToken) {
        setUsuario(resultado);

        router.push("/home");
      } else {
        setError(resultado);
      }
      console.log(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  //TODO SECTION
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState({
    nombre: "",
    descripcion: "",
    estatus: false,
  });

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

  const checkTask = async (items) => {
    console.log(items.id);
    try {
      const url = `http://localhost:4000/tareas/${items.id}`;
      if (items.estatus === true) {
        const respuesta = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            id: items.id,
            nombre: items.nombre,
            descripcion: items.descripcion,
            estatus: false,
          }),
        });
      } else {
        const respuesta = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            id: items.id,
            nombre: items.nombre,
            descripcion: items.descripcion,
            estatus: true,
          }),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (items) => {
    console.log(items.id);
    try {
      const url = `http://localhost:4000/tareas/${items.id}`;

      const respuesta = await fetch(url, {
        method: "DELETE",
      });
      const resultado = await respuesta.json();
    } catch (error) {
      console.log(error);
    }
  };

  const newTask = async (e) => {
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

  const actualizarState = (e) => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        handleChange,
        handleSubmit,
        error,
        usuario,

        tareas,
        tarea,
        setTareas,
        checkTask,
        deleteTask,
        newTask,
        actualizarState,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
