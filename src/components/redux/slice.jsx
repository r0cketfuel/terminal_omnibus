import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
  allProduct: [],
  copyallProducts: [],
  favProd: [],
};

export const dataSlice = createSlice({
  name: "allData",
  initialState,
  reducers: {

  },
});

//-------------------------------------------------------------------------------------------------------------------
//------------------------------------------ function Movies ------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------

export const { } =
  dataSlice.actions;

export default dataSlice.reducer;
