import "./App.css";
import SharedLayout from "./components/SharedLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WelcomePage from "./pages/WelcomePage";

import { useAuth } from "./redux/useAuth";
import { refreshUser } from "./redux/authOperations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";



function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch, navigate]);

  return isRefreshing ? (
    <h1>Refreshing User... Please wait.</h1>
  ) : (
    <>
      <Routes path="/" element={<SharedLayout />}>
        <Route index element={<WelcomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/dashboard" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/dashboard" />
          }
        />
        {/* <Route
          path="/dashboard"
          element={
            <PrivateRoute component={MainTransactions} redirectTo="/login" />
          }
        /> */}
      </Routes>
    </>
  );
}

export default App;
