import React from "react";
import { useSelector } from "react-redux";

import AccountVerificationAlertWarning from "./alerts/account-verification-alert-warning";
import AccountVerificationSuccessAlert from "./alerts/account-verification-success-alert";

import AdminNavbar from "./admin/admin-navbar";
import PrivateNavbar from "./private/private-navbar";
import PublicNavbar from "./public/public-navbar";

const Navbar = () => {
  //get user from store
  const state = useSelector((state) => state.users);
  const { userAuth } = state;
  const isAdmin = userAuth?.isAdmin;

  //account verification
  const account = useSelector(state => state?.accountVerification);
  const { loading, appErr, serverErr, token } = account;

  return (
    <>
      {isAdmin ? (
        <AdminNavbar isLogin={userAuth} />
      ) : userAuth ? (
        <PrivateNavbar isLogin={userAuth} />
      ) : (
        <PublicNavbar />
      )}
      {/* Display alert */}
      {userAuth && !userAuth.isVerified && <AccountVerificationAlertWarning />}
      {/* display success msg */}
      {loading && <h2 className="text-center">Loading please wait...</h2>}
      {token && <AccountVerificationSuccessAlert />}
      {appErr || serverErr ? (
        <h2 className="text-center text-red-500">
          {serverErr} {appErr}
        </h2>
      ) : null}
    </>
  );
};

export default Navbar;
