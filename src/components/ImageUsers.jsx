import React from "react";
import Image from '../images/Image.jpg'

const ImageUsers = () => {
  return (
    <div className="flex mt-12">
      <div className="-space-x-1">
        <img
          className="inline-block h-8 w-8 rounded-full ring-1 ring-slate-600"
          src={Image}
          alt="User"
        />
        <img
          className="inline-block h-8 w-8 rounded-full ring-1 ring-slate-600"
          src={Image}
          alt="User"
        />
        <img
          className="inline-block h-8 w-8 rounded-full ring-1 ring-slate-600"
          src={Image}
          alt="User"
        />
      </div>

      <div className="ml-6">
        <p className="text-secondary text-left">1000 users +</p>
        <p className="text-xs text-gray-500 text-left">
          Trusted by users for reliable expense tracking!
        </p>
      </div>
    </div>
  );
};

export default ImageUsers;
