
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import LoadingSppinner from "../Routes/Shared/LoadingSppinner";
const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
  if(loading){
    return <div>
      <LoadingSppinner></LoadingSppinner>
    </div>
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login"  state={location} ></Navigate>
};

export default PrivateRoute;