export type TypeApiResponse<TResponse, TError> = {
  status?: number;
  response?: TResponse;
  error?: TError;
};

export * from "./userTypes";
