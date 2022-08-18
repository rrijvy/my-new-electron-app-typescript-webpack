import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import { ApiReducer } from "./slices/apiSlice";
import { CounterReducer } from "./slices/counterSlice";
// ...

export const store = configureStore({
  reducer: {
    api: ApiReducer,
    counter: CounterReducer,
  },
  middleware: new MiddlewareArray(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
