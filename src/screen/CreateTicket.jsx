import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { raiseTicket } from "../features/ticket/ticketSlice";
import { toast } from "react-toastify";
import BackButton from "../components/BackButton";



const CreateTicket = () => {
  const { isLoading, isError, isSuccess, ticket, message } = useSelector(
    (state) => state.ticket
  );
  const {user}=useSelector((state)=> state.auth)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    product: "",
    description: "",
  });

  const { product, description } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(raiseTicket(formData));
    if (isSuccess && ticket) {
      navigate("/tickets");
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, [ticket, isError, message, isSuccess]);

  return (
    <div className="container p-5">
      <BackButton url={"/"}/>
      <div className="card p-3 rounded-0">
        <div className="h3 text-center">Raise Ticket</div>
        <form
          className="my-2 d-flex align-items-center justify-content-center flex-column"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={user?.name}
            className="my-2 form-control rounded-0"
            disabled
          />
          <input
            type="email"
            value={user?.email}
            className="my-2 form-control rounded-0 my-3"
            disabled
          />
          <select
            value={product}
            name="product"
            onChange={handleChange}
            className="my-2 form-select rounded-0"
            required
          >
            <option value="iPhone">iPhone</option>
            <option value="iPad">iPad</option>
            <option value="iWatch">iWatch</option>
            <option value="iMac">iMac</option>
            <option value="Macbook">Macbook</option>
          </select>
          <textarea
            value={description}
            name="description"
            onChange={handleChange}
            required
            className="form-control rounded-0 mt-4"
            placeholder="Describe Your Issue Here"
          ></textarea>
          <button
            type="submit"
            className="btn btn-outline-primary w-75 my-3 rounded-0 fw-bolder"
          >
            Raise-Ticket
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTicket;
