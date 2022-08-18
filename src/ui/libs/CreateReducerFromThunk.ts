import { AnyAction, AsyncThunk, createReducer, Reducer } from "@reduxjs/toolkit";
import { Utility } from "../core/utility";
import { TypeApiResponse } from "../models";

export type ApiReducerResponseType<TResponse, TError> = {
  uid: string;
  response?: TypeApiResponse<TResponse, TError>;
  error?: string;
  isBusy: boolean;
  version: number;
  reqCount: number;
  propgressPercent?: number;
};

const initialState = {
  uid: Utility.UUID.Generate(),
  isBusy: false,
  version: 0,
  reqCount: 0,
  propgressPercent: 0,
};

export const CreateReducerFromThunk = <TResponse, TError, ThunkArg>(
  thunk: AsyncThunk<TypeApiResponse<TResponse, TError>, ThunkArg, {}>
) => {
  return createReducer<ApiReducerResponseType<TResponse, TError>>(initialState, (builder) => {
    builder.addCase(thunk.pending, (state, action) => {
      return { ...state, isBusy: true, version: state.version + 1, reqCount: state.reqCount };
    });

    builder.addCase(thunk.fulfilled, (state, action) => {
      return { ...state, response: action.payload, isBusy: false, version: state.version + 1, reqCount: state.reqCount + 1 };
    });

    builder.addCase(thunk.rejected, (state, action) => {
      return { ...state, isBusy: false, version: state.version + 1 };
    });
  });
};
