import React, { useEffect } from "react";
import TicketRow from "../components/TicketRow";
import { useDispatch, useSelector } from "react-redux";
import { getTickets } from "../features/ticket/ticketSlice";
import BackButton from "../components/BackButton";


const AllTickets = () => {
  const { tickets, ticket, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.ticket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTickets());
  }, []);
  // if (tickets) {
  //   return <h1>no ticket</h1>;
  // }
  return (
    <>
      <div className="container p-5">
        <BackButton url={"/"}/>
        <div className="card rounded-0 p-3">
          <h3 className="text-center mt-2 mb-4">All Tickets</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {tickets?.map((value , index) => (
                <TicketRow key={value.id} value={value} index={index}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllTickets;
