import React from "react";
import LeftSide from "../components/LeftSide";
import ImageUsers from "../components/ImageUsers";
import { Link } from "react-router-dom";
import Header1 from "../components/Header1";
import { Helmet, HelmetProvider } from "react-helmet-async";

const WelcomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Expense Tracker</title>
      </Helmet>
      <Header1 />
      <div className="container flex bg-black my-10">
        <LeftSide />

        <div className="basis-1/2 ml-12">
          <div>
            <p className="text-left text-sm text-gray-500 mb-2">EXPENSE LOG</p>
            <h1 className="text-left text-5xl text-secondary mb-8">
              Manage Your{" "}
              <span className="text-primary underline">Finances</span>{" "}
              Masterfully!
            </h1>
            <p className="mb-12 text-left text-xs text-gray-500 w-96">
              ExpenseTracker effortlessly empowers you to take control of your
              finances! With intuitive features, it simplifies the process of
              tracking and managing expenses, allowing for a stress-free mastery
              over your financial world.
            </p>
          </div>

          <div className="text-left mb-36">
            <Link
              to="/register"
              type="Link"
              className="bg-primary rounded-full px-7 py-2 mr-7"
            >
              Sign Up
            </Link>

            <Link
              to="/login"
              type="Link"
              className="text-secondary rounded-full px-7 py-2 border"
            >
              Sign In
            </Link>
          </div>

          <div className="">
            <ImageUsers />
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default WelcomePage;
