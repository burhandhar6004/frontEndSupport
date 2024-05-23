import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/auth/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const { isLoading, isSuccess, isError, message, user } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }

    if (isError || message) {
      toast.error(message)
    }
  }, [user , isError, message]);

  if (isLoading) {
    return <h1 className="text-center text-secondary mt-5">Loading..</h1>;
  }
  return (
    <>
      <div className="container p-5 d-flex align-items-center justify-content-center flex-column ">
        <h3 className="text-center mb-5">Login Here</h3>
        <div className="card p-3 w-75">
          <form className="my-2 " onSubmit={handleSubmit}>
            <span className="d-flex align-items-center">
              <i className="fa-solid fa-at"></i>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control my-3 ms-2"
                required
                onChange={handleChange}
                value={email}
                name="email"
              />
            </span>
            <span className="d-flex align-items-center">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                className="form-control my-2 ms-2"
                required
                onChange={handleChange}
                value={password}
                name="password"
              />
            </span>
            <span className="d-flex align-items-center justify-content-center my-2">
              <button className="btn btn-primary w-50" type="submit">Login</button>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
