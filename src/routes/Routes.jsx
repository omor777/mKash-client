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
import AgentRoute from "./AgentRoute";
import UserRoute from "./UserRoute";

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
        element: (
          <PrivateRoute>
            <UserRoute>
              <Home />
            </UserRoute>
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <TotalBalance />
          </PrivateRoute>
        ),
      },
      {
        path: "/sendMoney",
        element: (
          <PrivateRoute>
            <UserRoute>
              <SendMoney />
            </UserRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/cashOut",
        element: (
          <PrivateRoute>
            <UserRoute>
              <CashOut />
            </UserRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "transactionManagement",
        element: (
          <PrivateRoute>
            <AgentRoute>
              <TransactionManagement />
            </AgentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/cashIn",
        element: (
          <PrivateRoute>
            <UserRoute>
              <CashIn />
            </UserRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/transaction-history",
        element: (
          <PrivateRoute>
            <AgentRoute>
              <TransactionHistory />
            </AgentRoute>
          </PrivateRoute>
        ),
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
