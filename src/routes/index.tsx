import MainLayout from "@/layouts/MainLayout"
import Blog from "@/pages/Blog"
import Cart from "@/pages/Cart"
import CartSidebar from "@/pages/CartSidebar"
import Checkout from "@/pages/Checkout"
import Contact from "@/pages/Contact"
import Home from "@/pages/Home"
import ProductComparison from "@/pages/ProductComparison"
import Shop from "@/pages/Shop"
import SingleProduct from "@/pages/SingleProduct"
import { createBrowserRouter, RouterProvider } from "react-router"

const router = createBrowserRouter ([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
         path: '/single-product',
         element: <SingleProduct />
      },
      {
        path: '/cart-sidebar',
        element: <CartSidebar />
      },
      {
        path: '/product-comparison',
        element: <ProductComparison />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/checkout',
        element: <Checkout />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/blog',
        element: <Blog />
      }
    ]
  }
])

export function AppRouter(){
  return (
    <RouterProvider router={router} />
  )
}