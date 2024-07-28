import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import ShowUsers from "../pages/show-users/ShowUsers";
import TotalBalance from "../pages/total-balance/TotalBalance";
import SendMoney from "../pages/send-money/SendMoney";
import CashOut from "../pages/cashout/CashOut";
import TransactionManagement from "../pages/transaction-management/TransactionManagement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <Register />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/allUsers",
        element: <ShowUsers />,
      },
      {
        path: "/balance",
        element: <TotalBalance />,
      },
      {
        path: "/sendMoney",
        element: <SendMoney />,
      },
      {
        path: "/cashOut",
        element: <CashOut />,
      },
      {
        path: "transactionManagement",
        element: <TransactionManagement />,
      },
    ],
  },
]);
