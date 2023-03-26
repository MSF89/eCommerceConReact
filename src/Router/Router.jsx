import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Products from "../Components/Products";
import CheckoutPage from "../Components/CheckoutPage";
import NotFound from "../Components/NotFound";
import { loaderOneProduct, OneProduct } from "../Components/OneProduct";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Products/>,
            },
            {
                path: '/products/:id',
                element: <OneProduct/>,
                loader: loaderOneProduct
            },
           
            {
                path: '/checkout-page',
                element: <CheckoutPage/>
            },
        ]
    },
])