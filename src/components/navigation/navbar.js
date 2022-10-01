import React from "react";
import { useSelector } from "react-redux";

import AdminNavbar from "./admin/admin-navbar";
import PrivateNavbar from "./private/private-navbar";
import PublicNavbar from "./public/public-navbar";

const Navbar = () => {
  //get user from store
  const state = useSelector((state) => state.users);
  const { userAuth } = state;
  const isAdmin = userAuth?.isAdmin;

  return (
    <>
      {isAdmin ? (
        <AdminNavbar />
      ) : userAuth ? (
        <PrivateNavbar />
      ) : (
        <PublicNavbar />
      )}
    </>
  );
};

export default Navbar;
