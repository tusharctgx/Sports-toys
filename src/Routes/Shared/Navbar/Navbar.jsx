import { Link } from "react-router-dom";
import logo from '../../../../src/assets/sports-toys.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";



const Navbar = () => {
  const {user, LogOut} = useContext(AuthContext);
  console.log(user?.email);
  const handleSignOut = () => {
    LogOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="navbar bg-base-100 h-28 mb-5">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      
       <Link to="/">HOME</Link> 
        <Link to="/alltoys">ALL TOYS</Link> 
        <Link to="/mytoys">MY TOYS</Link> 
        <Link to="/addatoys">ADD A TOYS</Link> 
        <Link to="/blog">BLOG</Link> 
      
        </ul>
      </div>
      <Link to='/' className=" text-xl">
      <img src={logo} alt="" />
      </Link>
    </div>
    <div className="gap-12 font-bold navbar-center hidden lg:flex">
        <Link to="/">HOME</Link> 
        <Link to="/alltoys">ALL TOYS</Link> 
        <Link to="/mytoys">MY TOYS</Link> 
        <Link to="/addatoys">ADD A TOYS</Link> 
        <Link to="/blog">BLOG</Link> 
    </div>
    <div className="navbar-end gap-4">
     
      {user?  (<a className="btn" onClick={handleSignOut}>Logout</a>  ) : (<Link to="/login" className="btn">Login</Link>
      )
      }
        
      
    </div>
  </div>
  );
};

export default Navbar;