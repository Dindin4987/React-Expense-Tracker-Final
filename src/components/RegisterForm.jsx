import React from "react";
import { register } from "../redux/authOperations";
import { useDispatch } from "react-redux";

/* Controlled Form Component vs Uncontrolled Form Component
 *
 * Controlled - data is controlled by state
 * Uncontrolled - data is controlled by the DOM
 */

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        required
        placeholder="Name"
        className="block w-full rounded-md border py-2 pl-2 my-6 text-white bg-black placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
      />

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
        className="block w-full rounded-md border py-2 pl-2 mt-4 mb-8 text-white bg-black placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
      />

      <div className="text-left mt-10">
        <button
          type="submit"
          className="bg-primary rounded-full px-7 py-2 text-left"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
