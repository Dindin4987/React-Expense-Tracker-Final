import React from "react";
import RegisterForm from "../components/RegisterForm";
import { Link } from "react-router-dom";
import LeftSide from "../components/LeftSide";

const RegisterPage = () => {
  return (
    <div className="container flex bg-black">
      <LeftSide />
      <div className="flex w-1/2 flex-col px-6 mt-4">
        <div className="ml-10">
          <h2 className="text-left text-3xl text-secondary">Sign Up</h2>
          <p className="text-xs text-gray-500 text-left my-6">
            Step into a world of hassle-free expense management! Your journey
            towards financial mastery begins here.
          </p>
        </div>

        <div className="ml-10">
          <RegisterForm />
        </div>
        <p className="text-xs text-gray-500 text-left mt-4 ml-10">
          Already have account?{" "}
          <Link to="/login" type="Link">
            <span className="underline">Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
