import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductPage from "../pages/ProductPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";
import ImagePage from "../pages/ImagePage";
import ErrorPage from "../pages/ErrorPage";
import { lazy, Suspense } from "react";
import ExpensiveCard from "../components/ExpensiveCard";
import ComponentA from "../components/Prop Drilling/ComponentA";

const ContactPage = lazy(() => import("../pages/ContactPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/products",
        element: <ProductPage />,
      },
      {
        path: "/products/:product_id",
        element: <ProductDetailsPage />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={"Loading..."}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/image-component",
        element: <ImagePage />,
      },
      {
        path: "/use-memo",
        element: <ExpensiveCard />,
      },
      {
        path:"/prop-dilling",
        element: <ComponentA/>
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
