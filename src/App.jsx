import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WelcomePage from "./pages/WelcomePage";
import MainTransactions from "./pages/MainTransactionsPage";

import { useAuth } from "./redux/useAuth";
import { refreshUser } from "./redux/authOperations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";
import ExpenseList from "./components/ExpenseList";
import IncomeList from "./components/IncomeList";
import AddTransaction from "./components/AddTransaction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      dispatch(refreshUser());
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<WelcomePage />} />
      <Route
        path="/register"
        element={
          <RestrictedRoute component={RegisterPage} redirectTo="/login" />
        }
      />
      <Route
        path="/login"
        element={
          <RestrictedRoute component={LoginPage} redirectTo="/dashboard" />
        }
      />
      <Route
        path="/dashboard"
        element={<PrivateRoute component={MainTransactions} redirectTo="/" />}
      />

      <Route
        path="/expenselist"
        element={<PrivateRoute component={ExpenseList} redirectTo="/" />}
      />

      <Route
        path="/incomelist"
        element={<PrivateRoute component={IncomeList} redirectTo="/" />}
      />
    </Routes>
  );
}

export default App;
