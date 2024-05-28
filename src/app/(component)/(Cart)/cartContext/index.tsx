"use client";
import React, { createContext, useState, useEffect } from "react";
import { message } from "antd";
import store from "store2";
import { imageData } from "../../_shared/contants";
interface CartContextPropType {
  addToCart: (product: any) => void;
  addToCartPrint: (product: any) => void;
  cartItems: Array<Record<string, any>>;
  artPrints: Array<Record<string, any>>;
  removeFromCart: (product: any) => void;
  removeFromCartPrint: (productId: string) => void;
  clearCart: () => void;
  setArtPrints: any;
  shopArts: Array<Record<string, any>>;
  setShopArts: any;
  showDrawer: any;
  onClose: any;
  visible:boolean;
}

export const CartContext = createContext<CartContextPropType>({
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  addToCartPrint: () => {},
  removeFromCartPrint: () => {},
  cartItems: [],
  artPrints: [],
  setArtPrints: () => {},
  shopArts: [],
  setShopArts: () => {},
  onClose: () => {},
  showDrawer: () => {},
  visible:false,
});

export const CartProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<any>(
    store.get("originalArts") || []
  );
  const [artPrints, setArtPrints] = useState<any>(store.get("printsArt") || []);
  const [visible, setVisible] = useState(false);
  const [shopArts, setShopArts] = useState(() => {
    // Retrieve cards from localStorage if they exist, otherwise use initialCards
    const savedCards = store.get('cards');
    return savedCards ? JSON.parse(savedCards) : imageData;
  });
  useEffect(() => {
    // Save cards to localStorage whenever they change
    store.set('cards', JSON.stringify(shopArts));
  }, [shopArts]);
  useEffect(() => {
    store.set("originalArts", cartItems);
  }, [cartItems]);

  useEffect(() => {
    store.set("printsArt", artPrints);
  }, [artPrints]);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
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
        setArtPrints,
        shopArts,
        setShopArts,
        visible,
        showDrawer,
        onClose,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
