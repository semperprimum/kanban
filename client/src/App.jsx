import { GlobalStyle } from "./globalStyles";
import { AppRouter } from "./router/AppRouter";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
      <ToastContainer theme="dark" transition={Zoom} />
    </>
  );
}
