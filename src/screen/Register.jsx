import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../features/auth/authSlice";

const Register = () => {
  const { isLoading, isSuccess, isError, message, user } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Password Not Mached");
    } else {
      dispatch(registerUser(formData));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    if (isError) {
      toast.error(message)
    }
  }, [user, isError,message]);




  if (isLoading) {
    return <h1 className="text-center text-secondary mt-5">Loading..</h1>;
  }

  return (
    <>
      <div className="container p-5 d-flex align-items-center justify-content-center flex-column ">
        <h3 className="text-center mb-5">Register Here</h3>
        <div className="card p-3 w-75">
          <form className="my-2" onSubmit={handleSubmit}>
            <span className="d-flex align-items-center">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="form-control my-3 ms-2"
                required
              />
            </span>
            <span className="d-flex align-items-center">
              <i className="fa-solid fa-at"></i>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="form-control my-2 ms-2"
                required
              />
            </span>
            <span className="d-flex align-items-center">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
                className="form-control my-3 ms-2"
                required
              />
            </span>
            <span className="d-flex align-items-center">
              <i className="fa-solid fa-key"></i>
              <input
                type="password"
                name="password2"
                value={password2}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="form-control my-2 ms-2"
                required
              />
            </span>
            <span className="d-flex align-items-center justify-content-center my-3">
              <button className="btn btn-primary w-50" type="submit">
                Register
              </button>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
