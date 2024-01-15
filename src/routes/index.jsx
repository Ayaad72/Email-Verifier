import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../components/login/App";
import Bulk from "../components/Bulk/App";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/bulk",
    element: <Bulk />,
  },
  {
    path: "/new-route",
    element: <div>hello</div>,
  },
]);
