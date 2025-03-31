import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu, { loader as menuLoader } from '../features/menu/Menu';

import CreateOrder from "../features/order/CreateOrder";
import Order from "../features/order/Order";
import Home from "../pages/Home";
import AppLayout from "../ui/AppLayout";
import Error from "../ui/Error";
import Cart from "../features/cart/Cart";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
      //  action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
       // loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);



function App() {
  return <RouterProvider router={router} />;
}

export default App;
