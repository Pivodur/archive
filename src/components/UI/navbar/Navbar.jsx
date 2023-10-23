import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context";
import cl from "./Navbar.module.css";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className={cl.navbar}>
      <div className="container">
        <div className={cl.navbarInner}>
          <div className="navbar__links">
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/posts">My Docs</Link>
              </li>
            </ul>
          </div>
          <MyButton onClick={logout}>Log out</MyButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
