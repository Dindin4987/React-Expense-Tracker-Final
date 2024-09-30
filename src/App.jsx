import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WelcomePage from "./pages/WelcomePage";
import MainTransactions from "./pages/MainTransactionsPage";

import { refreshUser } from "./redux/authOperations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";
import ExpenseList from "./components/ExpenseList";
import IncomeList from "./components/IncomeList";

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
      <Route
        path="/dashboard"
        element={<PrivateRoute redirectTo="/" component={MainTransactions} />}
      />

      <Route
        path="/"
        element={<RestrictedRoute redirectTo="/dashboard" component={WelcomePage} />}
      />

      <Route
        path="/register"
        element={
          <RestrictedRoute redirectTo="/dashboard" component={RegisterPage} />
        }
      />

      <Route
        path="/login"
        element={
          <RestrictedRoute redirectTo="/dashboard" component={LoginPage} />
        }
      />

      <Route
        path="/expenselist"
        element={<PrivateRoute redirectTo="/" component={ExpenseList} />}
      />

      <Route
        path="/incomelist"
        element={<PrivateRoute redirectTo="/" component={IncomeList} />}
      />
    </Routes>
  );
}

export default App;
