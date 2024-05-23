import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./screen/Home";
import Login from "./screen/Login";
import Register from "./screen/Register";
import SingleTicket from "./screen/SingleTicket";
import AllTickets from "./screen/AllTicket";
import CreateTicket from "./screen/CreateTicket";
import AdminAllTickets from "./screen/AdminAllTicket";
import PrivateRoute from "./screen/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<PrivateRoute />}>
          <Route path="tickets" element={<AllTickets />} />
          <Route path="create" element={<CreateTicket />} />
          <Route path="ticket/:id" element={<SingleTicket />} />
          <Route path="admin/all-tickets" element={<AdminAllTickets />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
