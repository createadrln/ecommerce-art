import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CardPage from "./pages/CardPage";
import CheckoutPage from "./pages/CheckoutPage";
import Login from "./components/Login";
import PurchaseHistory from "./components/PurchaseHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/card",
    element: <CardPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/purchase-history",
    element: <PurchaseHistory />,
  },
]);

const App = () =>
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

export default App;
