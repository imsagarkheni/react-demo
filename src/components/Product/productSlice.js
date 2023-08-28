import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../../redux/services/product";

const initialState = {};

export const getProductDetail = createAsyncThunk(
  "product/list",
  async (payload) => {
    return await getProduct(payload);
  }
);

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductDetail.fulfilled, (state, action) => {});
  },
});

export default productSlice.reducer;
