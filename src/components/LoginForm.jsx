import React from "react";
import { login } from "../redux/authOperations";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className="space-y-6 ml-10" onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        className="block w-full rounded-md border py-2 pl-2 my-4 text-white bg-black placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
      />

      <input
        name="password"
        type="password"
        required
        placeholder="Password"
        className="block w-full rounded-md border py-2 pl-2 mt-4 mb-16 text-white bg-black placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
      />

      <div className="text-left mt-10">
        <button
          type="submit"
          className="bg-primary rounded-full px-7 py-2 text-left"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
