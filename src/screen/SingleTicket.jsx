import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTicket } from "../features/ticket/ticketSlice";
import BackButton from "../components/BackButton";


const SingleTicket = () => {
  const { ticket } = useSelector((state) => state.ticket);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(()=>{
     dispatch(getTicket(id))
  },[])

  return (
    <>
      <div className="conatiner p-5">
        <BackButton url={"/"}/>
        <div className="card p-3 rounded-0">
          <p className="text-secondary">Ticket Id : {id}</p>
          <h5 className="text-dark">Product Name : {ticket?.product}</h5>
          <h6 className="text-secondary">Product Issue : {ticket?.description}</h6>
          <p className="text-secondary">Ticket Date : {new Date(ticket?.createdAt).toDateString("en-IN")}</p>
          <p className="text-secondary">
            Ticket Status :{" "}
            <span className="badge bg-success rounded-0">{ticket?.status}</span>
          </p>
        </div>

        <div className="card p-3 rounded-0 mt-4">
          <h4>Notes :</h4>
          <form className="my-3 d-flex align-items-center justify-content-center flex-column">
            <textarea
              className="form-control rounded-0"
              placeholder="Enter Note Here.."
            ></textarea>
            <button className="btn btn-dark rounded-0 my-3 w-50">
              Add Note
            </button>
          </form>

          <ul className="list-group my-2">
            <li className="list-group-item rounded-0">
              Please Resolve My Issue
            </li>
          </ul>
        </div>

        <span className="d-flex align-items-center justify-content-center">
          <button className="btn btn-danger rounded-0 mt-4">
            Close Ticket
          </button>
        </span>
      </div>
    </>
  );
};

export default SingleTicket;
