import React from "react";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
import LeftSide from "../components/LeftSide";

const LoginPage = () => {
  return (
    <div className="container flex bg-black">
      <LeftSide />
      <div className="flex w-1/2 flex-col px-6 mt-4">
        <div className="ml-10">
          <h2 className="text-left text-3xl text-secondary">Sign In</h2>
          <p className="text-xs text-gray-500 text-left my-8">
            Welcome back to effortless expense tracking! Your financial
            dashboard awaits.
          </p>
        </div>

        <LoginForm />

        <p className="text-xs text-gray-500 text-left mt-4 ml-10">
          Don't have an account?{" "}
          <Link to="/register" type="Link">
            <span className="underline">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
