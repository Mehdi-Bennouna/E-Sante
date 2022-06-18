import { createSlice } from "@reduxjs/toolkit";

export const patientsSlice = createSlice({
    name: "patients",
    initialState: {
        patients: null,
    },
    reducers: {
        load: (state: any, action: any) => {
            state.patients = action.payload;
        },
    },
});

export const { load } = patientsSlice.actions;

export const selectPatients = (state: any) => state.patients.patients;

export default patientsSlice.reducer;
