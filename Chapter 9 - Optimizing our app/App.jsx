import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
const About = lazy(() => import("./src/components/About"));
const Contact = lazy(() => import("./src/components/Contact"));
const Cart = lazy(() => import("./src/components/Cart"));
import Footer from "./src/components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Shimmer from "./src/components/Shimmer";
const RestaurantMenu = lazy(() => import("./src/components/RestaurantMenu"));

const AppyLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppyLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
                errorElement: <Error />
            },
            {
                path: "/about",
                element: (<Suspense fallback={<Shimmer />}>
                    <About name="Akshit" greeting="Hello" />
                </Suspense>),
                errorElement: <Error />
            },
            {
                path: "/contact",
                element: (<Suspense fallback={<Shimmer />}>
                    <Contact />
                </Suspense>),
                errorElement: <Error />
            },
            {
                path: "/cart",
                element: (<Suspense fallback={<Shimmer />}>
                    <Cart />
                </Suspense>),
                errorElement: <Cart />
            },
            {
                path: "/restaurant/:resId",
                element: (<Suspense fallback={<Shimmer />}>
                    <RestaurantMenu />
                </Suspense>)
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);