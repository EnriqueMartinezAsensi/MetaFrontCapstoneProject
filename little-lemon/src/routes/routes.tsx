import { RouteObject } from "react-router-dom";
//Common
import ErrorPage from "../pages/ErrorPage";
//Pages
import MainPage from "../pages/MainPage";
import BookingPage from "../pages/BookingPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/book",
    element: <BookingPage />,
    errorElement: <ErrorPage />,
  }
];

export default routes;