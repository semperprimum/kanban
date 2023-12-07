import { GlobalStyle } from "./globalStyles";
import { AppRouter } from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export default function App() {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
      <ToastContainer theme="dark" />
    </>
  );
}
