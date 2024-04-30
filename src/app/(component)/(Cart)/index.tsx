// Cart.js
"use client";
import React from "react";
import { Button, Empty, Image, Tooltip } from "antd";
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
              <Tooltip title="Remove this item from Cart">
                <CloseCircleOutlined
                  className={styles.remove_button}
                  onClick={() => removeFromCart(items.src)}
                />
              </Tooltip>

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
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Your Cart is empty"
        />
      )}
      {cartItems.length && (
        <>
          <div style={{ color: "darkorange" }}>
            <span style={{ fontSize: 18, fontWeight: "bolder" }}>Total:</span>
            <span>
              {cartItems.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.price;
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
