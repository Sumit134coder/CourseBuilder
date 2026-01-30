import React from "react";

const AuthActions = () => {
  const loggedIn = false;

  return (
    <ul className="flex items-center gap-[26px]">
      <li>
        <button title="Login to account" className="btn btn-pill btn-white">
          Login
        </button>
      </li>
      <li>
        <button title="Signup" className="btn btn-pill btn-primary">
          Sign Up
        </button>
      </li>
    </ul>
  );
};

export default AuthActions;
