import axios from "axios";
// const API_URL = "/api/ticket";

const addTicket = async (formData, token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post("https://backendsupport-2nt6.onrender.com/api/ticket", formData, option);
  return response.data;
};

const fetchTickets = async (token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get("https://backendsupport-2nt6.onrender.com/api/ticket", option);
  return response.data;
  // return response.data;
};

const fetchTicket = async (id, token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get("https://backendsupport-2nt6.onrender.com/api/ticket/"+ id, option);
  return response.data;
  // return response.data;
};

const fetchAllUsersTickets = async (token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get("https://backendsupport-2nt6.onrender.com/api/admin/tickets", option);
  return response.data;
};

const ticketService = {
  addTicket,
  fetchTickets,
  fetchTicket,
  fetchAllUsersTickets,
};

export default ticketService;
