import { combineReducers, createReducer, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TypeApiResponse, User } from "../../models";
import { ThunkGetUser } from "../../api/getUser";
import { ApiReducerResponseType, CreateReducerFromThunk } from "../../libs/CreateReducerFromThunk";

// Define a type for the slice state
interface ApiState {
  GetUser?: ApiReducerResponseType<User, string>;
}

export const ApiReducer = combineReducers<ApiState>({
  GetUser: CreateReducerFromThunk(ThunkGetUser),
});
