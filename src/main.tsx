import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { Home, Cart, ProductDetail } from "./pages";
import { ShoppingCartProvider } from "./context";

createRoot(document.getElementById("root")!).render(
  <ShoppingCartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  </ShoppingCartProvider>
);