import "./App.css";
import SharedLayout from "./components/SharedLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WelcomePage from "./pages/WelcomePage";
import MainTransactions from "./pages/MainTransactionsPage";

import { useAuth } from "./redux/useAuth";
import { refreshUser } from "./redux/authOperations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


import { Routes, Route, useNavigate } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";
import ExpenseList from "./components/ExpenseList";
import IncomeList from "./components/IncomeList";
import AddTransaction from "./components/AddTransaction";



function App() {
  
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch, navigate]);

  return (
    <>
      <WelcomePage />
    
      <ExpenseList />
      <IncomeList />
      <RegisterPage />
      <LoginPage />
      <AddTransaction />
    </>
  );
}

export default App;
