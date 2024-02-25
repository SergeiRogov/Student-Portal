import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { theme } from "./styles/theme";

import reportWebVitals from "./reportWebVitals";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { NavbarLayout } from "./components/NavbarLayout";
import { Root } from "./components/Root";
import { Course } from "./pages/courses/course/Course";
import { Courses } from "./pages/courses/Courses";
import ErrorPage from "./pages/error-page/ErrorPage";
import { ForgotPassword } from "./pages/forgot-password/ForgotPassword";
import { History } from "./pages/history/History";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/registration/Register";
import { Payment } from "./pages/shopping-cart/payment/Payment";
import { ShoppingCart } from "./pages/shopping-cart/ShoppingCart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route element={<NavbarLayout />}>
        <Route path="courses">
          <Route index element={<Courses />} />
          <Route path=":id" element={<Course />} />
        </Route>

        <Route path="shopping-cart">
          <Route index element={<ShoppingCart />} />
          <Route path="payment" element={<Payment />} />
        </Route>

        <Route path="history" element={<History />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
