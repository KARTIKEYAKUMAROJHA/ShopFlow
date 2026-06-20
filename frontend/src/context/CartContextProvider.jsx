import { useState } from "react";
import CartContext from "./CartContext";
import { addItemToCart } from "../services/cartService";

import toast from "react-hot-toast";

function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState(() => {

    const savedCart = localStorage.getItem(
      "cartItems"
    );

    return savedCart
      ? JSON.parse(savedCart)
      : [];

  });

  const addToCart = async (product) => {

    try {

      const request = {

  userId: Number(
    localStorage.getItem(
      "userId"
    )
  ),

  productId: product.id,

  quantity: 1,

};

      await addItemToCart(
        request
      );

      const updatedCart = [

        ...cartItems,

        product,

      ];

      setCartItems(
        updatedCart
      );

      localStorage.setItem(

        "cartItems",

        JSON.stringify(
          updatedCart
        )

      );

     toast.success(
  "Product added successfully"
);

    }

    catch (error) {

      console.log(
        error
      );

     toast.error(
  "Failed to add product"
);

    }

  };

  const removeFromCart = (id) => {

    const updatedCart = cartItems.filter(

      (item) =>

        item.id !== id

    );

    setCartItems(
      updatedCart
    );

    localStorage.setItem(

      "cartItems",

      JSON.stringify(
        updatedCart
      )

    );

  };

  const clearCart = () => {

    setCartItems([]);

    localStorage.removeItem(
      "cartItems"
    );

  };

  return (

    <CartContext.Provider

      value={{

        cartItems,

        addToCart,

        removeFromCart,

        clearCart,

      }}

    >

      {children}

    </CartContext.Provider>

  );

}

export default CartProvider;