import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../slices/category/categorySlice";
import post from "../slices/posts/postSlices";
import usersReducer from "../slices/users/usersSlices";
import comment from "../slices/comments/commentSlices";
import sendMail from "../slices/email/emailSlices";

const store = configureStore({
  reducer: {
    users: usersReducer,
    category: categoryReducer,
    post,
    comment,
    sendMail,
  },
});

export default store;
