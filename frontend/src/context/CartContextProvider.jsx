import { useState } from "react";
import CartContext from "./CartContext";
import api from "../api/axios";

function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = async (product) => {

    try {

      const request = {
        userId: 1,
        productId: product.id,
        quantity: 1,
      };

      await api.post("/api/cart", request);

      setCartItems((prev) => [...prev, product]);

      alert("Product added to cart");

    } catch (error) {

      console.log(error);

      alert("Failed to add product");

    }

  };

  const removeFromCart = (id) => {

    setCartItems(
      cartItems.filter((item) => item.id !== id)
    );

  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );

}

export default CartProvider;