import { Home } from "../pages/homePage/Home";
import { Login } from "../pages/loginPage/Login";
import { Register } from "../pages/registerPage/Register";

export const routes = [
  { id: 1, path: "/", element: <Home /> },
  { id: 2, path: "/register", element: <Register /> },
  { id: 3, path: "/login", element: <Login /> },
];
