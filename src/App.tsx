import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Category from "./pages/category/Category";
import Checkout from "./pages/checkout/Checkout";
import Product from "./pages/product/Product";
import Authentication from "./pages/(auth)/Authentication";
import "./App.scss"
import Subscription from "./pages/subscription/Subscription";
import Home from './pages/home/Home';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>  
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element:<Home />
      },
      {
        path: "/post/:id",
        element:<Product />
      },
      {
        path: "/category/:id",
        element:<Category />
      },
      {
        path: "/checkout/:id",
        element:<Checkout />
      },
      {
        path: "/about",
        element:<About />
      },
      {
        path: "/subscription",
        element:<Subscription />
      },
    ],
  },
  {
    path: "/register",
    element: <Authentication />,
  }
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
