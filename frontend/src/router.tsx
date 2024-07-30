import { createBrowserRouter } from "react-router-dom";
import { Ativo, Home, Sensor } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ativo",
    element: <Ativo />,
  },
  {
    path: "/sensor",
    element: <Sensor />,
  },
]);
