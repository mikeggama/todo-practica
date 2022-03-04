import React, { useContext } from "react";
import {
  TrashIcon,
  CheckIcon,
  PencilIcon,
  XIcon,
} from "@heroicons/react/outline";
import { TodoContext } from "../context/TodoContext";

const Tareas = () => {
  const { tareas, checkTask, deleteTask } = useContext(TodoContext);

  return (
    <table className="table-auto">
      <thead className="">
        <tr>
          <th className="bg-slate-200 text-left text-lg">TAREA</th>
          <th className="bg-slate-400 text-left text-lg text-white">
            Descripcion
          </th>
          <th className="bg-slate-700 text-left text-lg text-white">
            Opciones
          </th>
        </tr>
      </thead>

      <tbody>
        {tareas.map((items, index) => (
          <tr key={index}>
            <td
              className={`text-left font-light ${
                items.estatus ? "bg-green-300" : "bg-yellow-300"
              } `}
            >
              {items.nombre}
            </td>
            <td
              className={`text-left font-light ${
                items.estatus ? "bg-green-300" : "bg-yellow-300"
              } `}
            >
              {items.descripcion}
            </td>
            <td className="bg-slate-200 text-left font-light px-4">
              {items.estatus ? (
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mx-2"
                  onClick={() => checkTask(items)}
                >
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              ) : (
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mx-2"
                  onClick={() => checkTask(items)}
                >
                  <CheckIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              )}

              <button
                type="button"
                className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mx-2"
              >
                <PencilIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mx-2"
                onClick={() => deleteTask(items)}
              >
                <TrashIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tareas;
