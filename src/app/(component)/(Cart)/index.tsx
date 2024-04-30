"use client";
import React from "react";
import { Button, Image, Empty } from "antd";
import styles from "./cart.module.css";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useMediaQuery, mediaSize } from "../_shared/responsiveness";
interface CartProps {
  cartItems: Array<Record<string, any>>;
  removeFromCart: (productId: string) => void;
}
const Cart = (props: CartProps) => {
  const { cartItems, removeFromCart } = props;
  const isMobile = useMediaQuery(mediaSize.mobile);
  return (
    <div>
      {cartItems.length > 0 ? (
        cartItems.map((items, index) => {
          return (
            <div className={styles.container} key={index}>
              <CloseCircleOutlined
                className={styles.remove_button}
                onClick={() => removeFromCart(items.src)}
              />

              <Image
                src={items.src}
                alt="Image"
                className={styles.image}
                width={150}
                height={150}
              />
              <div className={styles.text_container}>
                <p
                  className={styles.text}
                  style={{ fontSize: isMobile ? "1em" : "1.5em" }}
                >
                  {items.name}
                </p>
                <p className={styles.text}>{`Size: ${items.size}`}</p>
                <p className={styles.text}>{`Year: ${items.year}`}</p>
                <p className={styles.text}>{`Price: ${items.price}`}</p>
              </div>
              {/* <Divider /> */}
            </div>
          );
        })
      ) : (
        <Empty
          description={
            <span style={{ color: "darkorange", opacity: 0.8 }}>
              Your Cart is Empty
            </span>
          }
        />
      )}
      {cartItems.length > 0 && (
        <>
          <div style={{ color: "darkorange" }}>
            <span style={{ fontSize: 18, fontWeight: "bolder" }}>Total:</span>
            <span>
              {cartItems.reduce((accumulator, currentItem) => {
                const total = accumulator + currentItem.price;
                return total;
              }, 0)}
            </span>
          </div>
          <div className={styles.checkout}>
            <Button
              type="primary"
              style={{ color: "#fff", backgroundColor: "darkorange" }}
            >
              Checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
