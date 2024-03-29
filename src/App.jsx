import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import CartProvider from "./context/CartProvider.jsx";
import ExploreProduct from "./pages/ExploreProduct.jsx";
import {Toaster} from "react-hot-toast";
import Product from "./pages/Product.jsx";
import Checkout from "./pages/Checkout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="/explore/:category" element={<ExploreProduct/>}/>
      <Route path="/product/:productId" element={<Product/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
    </Route>
  )
)

const App = () => {
  return (
    <>
      <CartProvider>
        <RouterProvider router={router}/>
        <Toaster
          toastOptions={{
            style: {
              padding: "16px",
              fontSize: "1.6rem"
            },
          }}
        />
      </CartProvider>
    </>
  )
}

export default App
