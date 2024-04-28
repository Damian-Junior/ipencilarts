"use client";
// CartContext.js
import React, { createContext, useState, useEffect } from "react";
import { message } from "antd";

interface CartContextPropType {
  addToCart: (product: any) => void;
  cartItems: any;
  removeFromCart: (product: any) => void;
  clearCart: () => void;
}
// Create the context
export const CartContext = createContext<CartContextPropType>({
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  cartItems: [],
});

// Cart context provider component
export const CartProvider = ({ children }: any) => {
  // Initialize cartItems state with value from local storage or an empty array
  const [cartItems, setCartItems] = useState<any>(
    //@ts-ignore
    JSON.parse(localStorage.getItem("carts")) || []
  );
  // Update local storage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(cartItems));
  }, [cartItems]);
  // Add product to cart
  const addToCart = (product: Record<string, any>) => {
    // Check if the product already exists in the cart
    const exists = cartItems.some(
      (item: Record<string, any>) => item.src === product.src
    );

    if (exists) {
      // If the product exists, show a message
      message.error("Product already added to cart");
    } else {
      // If the product does not exist, add it to the cart
      setCartItems((prevItems: any) => [...prevItems, product]);
      message.success("Product added to cart successfully");
    }
  };

  // Remove product from cart
  const removeFromCart = (productId: string | number) => {
    setCartItems(
      cartItems.filter((item: Record<string, any>) => item.src !== productId)
    );
    message.success("Item removed successfully");
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
