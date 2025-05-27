import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/Register/SignIn";
import ForgotPassword from "../Pages/Register/ForgotPassword";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path:'/register',
        Component:Register
      },
      {
        path:'/signIn',
        Component:SignIn
      }
      ,
      {
        path:'/forgotPassword',
        Component:ForgotPassword
      }
    ],
  },
]);

export default router;
