import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addTransactions,
  deleteTransactions,
  editTransactions,
  getTransactions
} from "./transactionAPI";

const initialState = {
  transactions: [],
  isError: false,
  isLoading: false,
  error: "",
};

// asynk thunk..............................................................

// get transaction
export const fetchTransactions = createAsyncThunk(
  "transaction/fetchTransactions",
  async () => {
    const transactions = await getTransactions();
    return transactions.data;
  }
);

// add transaction
export const createTransaction = createAsyncThunk(
  "transaction/createTransaction",
  async (data) => {
    const response = await addTransactions(data);
    return response;
  }
);

// edit transaction
export const changeTransaction = createAsyncThunk(
  "transaction/changeTransaction",
  async ({ id, data }) => {
    const response = await editTransactions(id, data);
    return response;
  }
);

// delete transaction
export const removeTransaction = createAsyncThunk(
  "transaction/removeTransaction",
  async (id) => {
    const response = await deleteTransactions(id);
    return response;
  }
);

// create slice.......................................................
const transactionsSlice = createSlice({
  name: "transaction",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isError = false;
        state.error = false;
        state.transactions = action.payload;
      })

      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.transactions = [];
        state.error = action.error?.message;
      })

      //add transaction.............................................
      .addCase(createTransaction.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.isError = false;
        state.error = false;
        state.transactions.push(action.payload);
      })

      .addCase(createTransaction.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })


      //changeTransaction.............................................
      .addCase(changeTransaction.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(changeTransaction.fulfilled, (state, action) => {
        state.isError = false;
        state.error = false;
        const indexToUpdate = state.transactions.findIndex(
            (t) => t.id === action.payload.id
        );
        state.transactions[indexToUpdate] = action.payload;
      })

      .addCase(changeTransaction.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })


      //removeTransaction ...................................................
      .addCase(removeTransaction.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(removeTransaction.fulfilled, (state, action) => {
        state.isError = false;
        state.error = false;
        state.transactions = state.transactions.filter((t)=> t.id !== action.payload
        );
      })

      .addCase(removeTransaction.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
});
export default transactionsSlice.reducer;
