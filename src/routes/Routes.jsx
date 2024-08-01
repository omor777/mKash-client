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
import CashIn from "../pages/cashin/CashIn";
import TransactionHistory from "../pages/transaction-history/TrasactionHistory";
import TransactionHistoryAdmin from "../pages/transaction-history-admin/TransactionHistoryAdmin";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error</div>,
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
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ShowUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
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
      {
        path: "/cashIn",
        element: <CashIn />,
      },
      {
        path: "/transaction-history",
        element: <TransactionHistory />,
      },
      {
        path: "/transaction-history-admin",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <TransactionHistoryAdmin />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
