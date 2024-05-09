"use client";
import { useState } from "react";
import { Button, Image, Space, Input } from "antd";
import styles from "./cart.module.css";
import { CloseCircleOutlined, MailOutlined } from "@ant-design/icons";
import { useMediaQuery, mediaSize } from "../_shared/responsiveness";
import usePayment from "@/app/hooks";
interface CartProps {
  cartItems: Array<Record<string, any>>;
  removeFromCart: (productId: string) => void;
  artPrints: Array<Record<string, any>>;
  removeFromCartPrint: (productId: string) => void;
  setArtPrints: any;
}
const ButtonGroup = Button.Group;
const Cart = (props: CartProps) => {
  const {
    cartItems,
    removeFromCart,
    artPrints,
    removeFromCartPrint,
    setArtPrints,
  } = props;
  const [email, setEmail] = useState("");
  const isMobile = useMediaQuery(mediaSize.mobile);
  const totalAmount =
    artPrints.reduce((acc, item) => acc + item.price * item.quantity, 0) +
    cartItems.reduce((acc, item) => acc + item.price, 0);
  const { handlePayClick } = usePayment({ email, amount: totalAmount });
  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const increaseQuantity = (index: number) => {
    const updatedArtPrints = [...artPrints];
    updatedArtPrints[index].quantity++;
    setArtPrints(updatedArtPrints);
  };
  const decreaseQuantity = (index: number) => {
    const updatedArtPrints = [...artPrints];
    if (updatedArtPrints[index].quantity > 1)
      updatedArtPrints[index].quantity--;
    setArtPrints(updatedArtPrints);
  };
  if (cartItems.length == 0 && artPrints.length == 0)
    return (
      <div
        style={{
          color: "#fff",
          opacity: 0.3,
          transform: "translate(30%, 300px)",
        }}
      >
        Your Cart is Empty
      </div>
    );
  return (
    <div>
      {cartItems.length > 0 && (
        <h3 style={{ marginBottom: 5, opacity: 0.5 }}>Original Art</h3>
      )}
      {cartItems.length > 0 &&
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
                <p className={styles.text}>{`Price: $${items.price}`}</p>
              </div>
            </div>
          );
        })}
      {cartItems.length > 0 && artPrints.length > 0 && (
        <div
          style={{
            border: "solid 1px gray",
            margin: `${
              cartItems.length == 0 ? "300px" : "20px"
            } -25px 20px -18px`,
            width: "110%",
            opacity: 0.5,
          }}
        />
      )}
      {artPrints.length > 0 && (
        <h3 style={{ marginBottom: 5, opacity: 0.5 }}>Art Prints</h3>
      )}
      {artPrints.length > 0 &&
        artPrints?.map((items, index) => {
          return (
            <div
              className={styles.container}
              key={index}
              style={{ position: "relative" }}
            >
              <CloseCircleOutlined
                className={styles.remove_button}
                onClick={() => removeFromCartPrint(items.src)}
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
                <p className={styles.text}>{`Price: $${items.price}`}</p>
              </div>
              <Space
                size="small"
                style={{ position: "absolute", bottom: "1%", right: "2%" }}
              >
                <ButtonGroup>
                  <Button onClick={() => decreaseQuantity(index)}>
                    &#x2212;
                  </Button>
                  <Button style={{ cursor: "not-allowed" }}>
                    {items.quantity}
                  </Button>
                  <Button onClick={() => increaseQuantity(index)}>
                    &#x2B;
                  </Button>
                </ButtonGroup>
              </Space>
            </div>
          );
        })}

      {(cartItems.length > 0 || artPrints.length > 0) && (
        <>
          <div style={{ color: "#fff" }}>
            <span style={{ fontSize: 18, fontWeight: "bolder" }}>Total: $</span>
            <span>{totalAmount}</span>
          </div>
          <div style={{ margin: "20px 0px", padding: "10px" }}>
            <Input
              prefix={<MailOutlined style={{ color: "rgba(0, 0, 0, 0.25)" }} />}
              placeholder="Enter your email"
              value={email}
              pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}"
              onChange={handleEmailChange}
            />
          </div>
          <div className={styles.checkout}>
            <Button
              type="primary"
              style={{ color: "#000", backgroundColor: "#fff" }}
              onClick={handlePayClick}
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
