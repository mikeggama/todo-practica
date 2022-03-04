import "../styles/globals.css";
import TodoProvider from "../context/TodoContext";

function MyApp({ Component, pageProps }) {
  return (
    <TodoProvider>
      <Component {...pageProps} />;
    </TodoProvider>
  );
}

export default MyApp;
