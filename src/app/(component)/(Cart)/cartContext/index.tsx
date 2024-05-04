"use client";
import React, { createContext, useState, useEffect } from "react";
import { message } from "antd";
import store from "store2";
interface CartContextPropType {
  addToCart: (product: any) => void;
  addToCartPrint: (product: any) => void;
  cartItems: Array<Record<string, any>>;
  artPrints:Array<Record<string, any>>;
  removeFromCart: (product: any) => void;
  removeFromCartPrint: (productId: string) => void;
  clearCart: () => void;
  setArtPrints:any;

}

export const CartContext = createContext<CartContextPropType>({
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  addToCartPrint: () => {},
  removeFromCartPrint: () => {},
  cartItems: [],
  artPrints:[],
  setArtPrints:()=>{},
});

export const CartProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<any>(store.get("carts") || []);
  const [artPrints, setArtPrints] = useState<any>(store.get("prints") || []);
  useEffect(() => {
    store.set("carts", cartItems);
  }, [cartItems]);

  useEffect(() => {
    store.set("prints", artPrints);
  }, [artPrints]);

  const addToCart = (product: Record<string, any>) => {
    const exists = cartItems.some(
      (item: Record<string, any>) => item.src === product.src
    );

    if (exists) {
      message.error("Product already added to cart");
    } else {
      setCartItems((prevItems: any) => [...prevItems, product]);
      message.success("Product added to cart successfully");
    }
  };
  const removeFromCart = (productId: string | number) => {
    setCartItems(
      cartItems.filter((item: Record<string, any>) => item.src !== productId)
    );
    message.success("Item removed successfully");
  };

  const addToCartPrint = (product: Record<string, any>) => {
    setArtPrints((prevItems: any) => [...prevItems, product]);
    message.success("Product added to cart successfully");
  };

  const removeFromCartPrint = (productId: string) => {
    setArtPrints(
      artPrints.filter((item: Record<string, any>) => item.src !== productId)
    );
    message.success("Item removed successfully");
  };

  const clearCart = () => {
    setCartItems([]);
    setArtPrints([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        removeFromCartPrint,
        addToCartPrint,
        artPrints,
        setArtPrints
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
