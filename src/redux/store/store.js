import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../slices/category/categorySlice";
import postReducer from "../slices/posts/postSlices";
import usersReducer from "../slices/users/usersSlices";

const store = configureStore({
  reducer: {
    users: usersReducer,
    category: categoryReducer,
    post: postReducer,
  },
});

export default store;
