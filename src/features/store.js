import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./ticket/ticketSlice";
import authSlice from "./auth/authSlice";

const store = configureStore({
  reducer: {
    ticket: ticketReducer,
    auth: authSlice,
  },
});

export default store;
