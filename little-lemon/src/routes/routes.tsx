import { RouteObject } from "react-router-dom";
//Common
import ErrorPage from "../pages/ErrorPage";
//Pages
import MainPage from "../pages/MainPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  }
];

export default routes;