import React, { useContext, useState } from "react";
import LoginButton from "./Button";
import { TodoContext } from "../context/TodoContext";
import Link from "next/link";

const LoginForm = () => {
  const { handleChange, error, handleSubmit } = useContext(TodoContext);

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login con tu cuenta
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => handleSubmit(e)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Direccion de email"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Contraseña"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <p className="text-red-600 text-center">{error}</p>
          </div>
          <div>
            <p className="text-center">
              ¿No tienes cuenta?{" "}
              <Link href="/registro">
                <a className="text-violet-900">crea una gratis</a>
              </Link>
            </p>
          </div>

          <div>
            <LoginButton label="Entrar" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
