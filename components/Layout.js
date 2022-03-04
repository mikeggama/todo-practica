import React, { useContext } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import { TodoContext } from "../context/TodoContext";

const Layout = ({ children }) => {
  const { usuario } = useContext(TodoContext);
  return (
    <>
      <Head>
        <title>Practica-TODO</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar usuario={usuario} />
      {children}
    </>
  );
};

export default Layout;
