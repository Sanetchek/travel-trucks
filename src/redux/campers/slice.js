import {
  createSlice
} from "@reduxjs/toolkit";
import {
  getCampers,
  getCampersById
} from "./operations";

const slice = createSlice({
  name: 'campers',
  initialState: {
    items: {},
    camper: {},
    filters: {},
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.loading = false;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Set error message
      })
      .addCase(getCampersById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCampersById.fulfilled, (state, action) => {
        state.camper = action.payload;
        state.loading = false;
      })
      .addCase(getCampersById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Set error message
      });
  },
});

export default slice.reducer;
