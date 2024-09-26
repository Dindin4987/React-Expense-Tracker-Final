import React from 'react'

const LoginForm = () => {
  return (
    <form className="space-y-6">
      
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

        <div className="text-left mt-28">
          <button
            type="submit"
            className="bg-primary rounded-full px-7 py-2 text-left"
          >
            Sign In
          </button>
          
        </div>
      
    </form>
  );
}

export default LoginForm