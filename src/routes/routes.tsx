import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPath } from "./AdminRoutes";
import { RoutesGenerator } from "../utils/RoutesGenerator";
import { facultyPath } from "./FacultyRoutes";
import { studentPath } from "./StudentRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: RoutesGenerator(adminPath),
  },
  {
    path: "/faculty",
    element: <App />,
    children: RoutesGenerator(facultyPath),
  },
  {
    path: "/student",
    element: <App />,
    children: RoutesGenerator(studentPath),
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default router;
