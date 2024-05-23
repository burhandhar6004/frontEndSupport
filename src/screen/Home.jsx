import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { isLoading, isSuccess, isError, message, user } = useSelector(
    (state) => state.auth
  );

  const isAdmin = user?.email === "admin@gmail.com" && user?.name === "admin";

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  if (isLoading) {
    return <h1 className="text-center text-secondary mt-5">Loading..</h1>;
  }

  return (
    <div className="container p-5">
      <h1 className="text-center fw-bolder my-4">
        Welcome {user?.name} to Help-Hub
      </h1>
      <div className="card p-3 rounded-0 my-3">
        {isAdmin ? (
          <>
            <Link
              to={"/user/admin/all-tickets"}
              className="btn btn-dark rounded-0 w-100 fw-bolder my-2"
            >
              View All Tickets
            </Link>
          </>
        ) : (
          <>
            <Link
              to={"/user/create"}
              className="btn btn-outline-dark rounded-0 w-100 fw-bolder my-2"
            >
              Raise Ticket
            </Link>
            <Link
              to={"/user/tickets"}
              className="btn btn-dark rounded-0 w-100 fw-bolder my-2"
            >
              View Tickets
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
