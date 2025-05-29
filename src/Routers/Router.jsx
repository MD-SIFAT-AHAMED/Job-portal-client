import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/Register/SignIn";
import ForgotPassword from "../Pages/Register/ForgotPassword";
import JobDetails from "../Pages/Shared/JobDetails";
import { param } from "motion/react-m";
import PrivateRoute from "../Routes/PrivateRoute";


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
      },
      {
        path:'/jobDetails/:id',
        loader:({params})=> fetch(`http://localhost:5000/jobs/${params.id}`),
        element:<PrivateRoute>
          <JobDetails/>
        </PrivateRoute>
      }
    ],
  },
]);

export default router;
