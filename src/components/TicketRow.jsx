import React from "react";
import { Link } from "react-router-dom";

const TicketRow = ({ value , index }) => {
  console;
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{value.product}</td>
      <td>{new Date(value.createdAt).toLocaleDateString("en-IN")}</td>
      <td>
        <span className="badge bg-success p-2">{value.status}</span>
      </td>
      <td>
        <Link to={`/user/ticket/${value._id}`} className="btn btn-dark btn-sm text-center">
          <i className="fa-regular fa-eye"></i>
        </Link>
      </td>
    </tr>
  );
};

export default TicketRow;
