import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import patientsReducer from "../features/patientSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        patients: patientsReducer,
    },
});
