import React from "react";
import Header1 from "./Header1";
import Header2 from "./Header2";
import { useAuth } from "../redux/useAuth";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return;
    <>
      <nav>{isLoggedIn ? <Header2 /> : <Header1 />}</nav>
      <Outlet />
    </>;
};

export default SharedLayout;
