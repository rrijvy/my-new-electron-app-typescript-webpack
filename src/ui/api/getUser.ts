import { AsyncThunk, AsyncThunkPayloadCreator, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TypeApiResponse } from "../models";
import { User } from "../models/userTypes";

type Param = {};

export const ThunkGetUser = createAsyncThunk<TypeApiResponse<User, string>, Param, {}>("getUser", async (param, thunkAPI) => {
  try {
    const response = await axios.get<User>("https://jsonplaceholder.typicode.com/todos/1");
    return { status: response.status, response: response.data };
  } catch (error) {
    return { error: error.message };
  }
});
