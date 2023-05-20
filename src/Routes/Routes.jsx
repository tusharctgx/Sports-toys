import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Errorpage from "./Shared/ErrorPage/Errorpage";
import Blog from "../Pages/Blog/Blog";
import AllToys from "../Pages/AllToys/AllToys";
import AddToys from "../Pages/AddToys/AddToys";
import MyToys from "../Pages/MyToys/MyToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import PrivateRoute from "../Providers/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
      path: "/blog",
      element: <Blog></Blog>
      },
      {
        path:"/alltoys",
        element: <AllToys></AllToys>
      },
      {
        path:"/addatoys",
        element:<PrivateRoute>
          <AddToys></AddToys>
        </PrivateRoute>
      },
      {
        path:"/mytoys",
        element: <PrivateRoute>
          <MyToys></MyToys>
        </PrivateRoute>
      },
      {
       path : "/details/:id",
      element: <PrivateRoute>
        <ToyDetails></ToyDetails>
      </PrivateRoute>,
      loader: ({params}) => fetch(`http://localhost:5000/toyscollection/${params.id}`)
      }
    ]
  },
]);

export default router;
