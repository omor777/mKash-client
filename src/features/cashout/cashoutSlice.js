import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "https://mkash-server.vercel.app/api/v1";

export const cashOut = createAsyncThunk(
  "transaction/cashOut",
  async (formData, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.post(
        `${baseUrl}/transaction/cashOut`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const initialState = {
  data: {},
  status: "idle",
  error: null,
};

const cashOutSlice = createSlice({
  name: "cashout",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(cashOut.pending, (state) => {
        state.status = "loading";
      })
      .addCase(cashOut.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(cashOut.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      });
  },
});

export default cashOutSlice.reducer;
