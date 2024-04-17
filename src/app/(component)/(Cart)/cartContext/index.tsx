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
  addToCart: (product: any) => console.log(product, "addToCart"),
  removeFromCart: (product: any) => {},
  clearCart: () => {},
  cartItems: [],
});

// Cart context provider component
export const CartProvider = ({ children }: any) => {
  // Initialize cartItems state with value from local storage or an empty array
  const [cartItems, setCartItems] = useState<any>(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  // Update local storage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  // Add product to cart
  const addToCart = (product: Record<string, any>) => {
    setCartItems([...cartItems, product]);
    message.success("Product added to cart successfully");
  };

  // Remove product from cart
  const removeFromCart = (productId: string | number) => {
    setCartItems(
      cartItems.filter((item: Record<string, any>) => item.id !== productId)
    );
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
