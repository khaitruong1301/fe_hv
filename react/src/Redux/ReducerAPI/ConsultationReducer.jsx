import { createSlice } from "@reduxjs/toolkit";
import { httpClient } from "../../Utils/Interceptors";

const initialState = {
  franchiseConsult: [
    {
      id: "d9bb3fcf-4053-44ed-0d94-08dcd8667c32",
      cusomterName: "hieu",
      email: "hieu@gmail.com",
      phoneNumber: 902451769,
      status: "NotConsulted",
      consultantUserName: null,
    },
  ],
  totalPagesCount: 0,
};

const ConsultationReducer = createSlice({
  name: "ConsultationReducer",
  initialState,
  reducers: {
    setFranchiseConsult: (state, action) => {
      state.franchiseConsult = action.payload.items;
      state.totalPagesCount = action.payload.totalPagesCount;
    },
  },
});

export const { setFranchiseConsult } =
  ConsultationReducer.actions;

export default ConsultationReducer.reducer;
//------------API CALL------------

export const GetFranchiseRegistrationConsultActionAsync = (status, pageIndex, pageSize) => {
  return async (dispatch) => {
    try {
      const res = await httpClient.get(`/api/v1/consultations`, {
        params: { Status: status, PageIndex: pageIndex, PageSize: pageSize }
      });
      console.log(res.data);
      dispatch(setFranchiseConsult(res.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const UpdateFranchiseRegistrationConsultActionAsync = (id, status, pageIndex, pageSize) => {
  return async (dispatch) => {
    try {
      const res = await httpClient.put(
        `/api/v1/consultations/${id}`
      );
      dispatch(GetFranchiseRegistrationConsultActionAsync(status, pageIndex, pageSize))
    } catch (error) {
      console.error(error);
    }
  };
};
