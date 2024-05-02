"use client";
import React from "react";
import { Button, Image, Empty, Space, Tag } from "antd";
import styles from "./cart.module.css";
import {
  CloseCircleOutlined,
} from "@ant-design/icons";
import { useMediaQuery, mediaSize } from "../_shared/responsiveness";
import { useState } from "react";
interface CartProps {
  cartItems: Array<Record<string, any>>;
  removeFromCart: (productId: string) => void;
  artPrints: Array<Record<string, any>>;
}
const ButtonGroup = Button.Group;
const Cart = (props: CartProps) => {
  const { cartItems, removeFromCart, artPrints } = props;
  const isMobile = useMediaQuery(mediaSize.mobile);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div>
      <h3 style={{ marginBottom: 5, opacity: 0.5 }}>Original Art Cart</h3>
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

             
            </div>
          );
        })
      ) : (
        <Empty
          description={
            <span style={{ color: "#fff", opacity: 0.8 }}>
              Your Cart is Empty
            </span>
          }
        />
      )}
      <div
        style={{
          border: "solid 1px gray",
          margin: "20px -25px 20px -18px",
          width: "110%",
          opacity: 0.5,

        }}
      />
      <h3 style={{ marginBottom: 5, opacity: 0.5 }}>Art Prints Cart</h3>
      {artPrints.length > 0 ? (
        artPrints?.map((items, index) => {
          return (
            <div className={styles.container} key={index}  style={{ position: "relative" }}>
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
              <Space
                size="small"
                style={{ position: "absolute", bottom: "1%", right: "2%" }}
              >
                <ButtonGroup>
                  <Button onClick={decreaseQuantity}>&#x2212; </Button>
                  <Button style={{ cursor: "not-allowed" }}>{quantity}</Button>
                  <Button onClick={increaseQuantity}>&#x2B;</Button>
                </ButtonGroup>
              </Space>
            </div>
          );
        })
      ) : (
        <Empty
          description={
            <span style={{ color: "#fff", opacity: 0.8 }}>
              Your Cart is Empty
            </span>
          }
        />
      )}

      {cartItems.length > 0 && (
        <>
          <div style={{ color: "#fff" }}>
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
              style={{ color: "#000", backgroundColor: "#fff" }}
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
