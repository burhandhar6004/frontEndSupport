import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary shadow-lg">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand mb-0 h1">
            Support Desk
          </Link>
          <span>
            {!user ? (
              <>
                <Link
                  to={"/login"}
                  className="btn btn-primary rounded-0 btn-sm fw-bolder mx-1"
                >
                  Sign-In
                </Link>
                <Link
                  to={"/register"}
                  className="btn btn-primary rounded-0 btn-sm fw-bolder mx-1"
                >
                  Sign-Up
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="btn text-danger rounded-0 btn-lg fw-bolder mx-1"
                  onClick={handleLogout}
                >
                  <i className="fa-solid fa-right-from-bracket"></i>
                </Link>
              </>
            )}
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
