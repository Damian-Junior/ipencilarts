"use client";
import { useState, useMemo, useCallback } from "react";
import { Button, Image, Space, Input, Skeleton } from "antd";
import styles from "./cart.module.css";
import { CloseCircleOutlined, MailOutlined } from "@ant-design/icons";
import { useMediaQuery, mediaSize } from "../_shared/responsiveness";
import usePayment from "@/app/hooks";

const ButtonGroup = Button.Group;

const CartItem = ({
  item,
  isMobile,
  onRemove,
  onIncrease,
  onDecrease,
  quantity,
}: any) => (
  <div className={styles.container} style={{ position: "relative" }}>
    <CloseCircleOutlined
      className={styles.remove_button}
      onClick={() => onRemove(item.src)}
    />

    {item.src ? (
      <Image
        src={item.src}
        alt="Image"
        className={styles.image}
        width={150}
        height={150}
        preview={false}
      />
    ) : (
      <Skeleton.Image
        active
        style={{ width: 150, height: 150 }}
        className={styles.image}
      />
    )}

    <div className={styles.text_container}>
      <p
        className={styles.text}
        style={{ fontSize: isMobile ? "1em" : "1.5em" }}
      >
        {item.name}
      </p>
      <p className={styles.text}>{`Size: ${item.size}`}</p>
      <p className={styles.text}>{`Year: ${item.year}`}</p>
      <p className={styles.text}>{`Price: $${item.price}`}</p>
    </div>
    {quantity !== undefined && (
      <Space
        size="small"
        style={{ position: "absolute", bottom: "1%", right: "2%" }}
      >
        <ButtonGroup>
          <Button onClick={onDecrease}>&#x2212;</Button>
          <Button style={{ cursor: "not-allowed" }}>{quantity}</Button>
          <Button onClick={onIncrease}>&#x2B;</Button>
        </ButtonGroup>
      </Space>
    )}
  </div>
);

const Cart = ({
  cartItems,
  removeFromCart,
  artPrints,
  removeFromCartPrint,
  setArtPrints,
}: {
  cartItems: Array<Record<string, any>>;
  removeFromCart: (productId: string) => void;
  artPrints: Array<Record<string, any>>;
  removeFromCartPrint: (productId: string) => void;
  setArtPrints: any;
}) => {
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const isMobile = useMediaQuery(mediaSize.mobile);

  const totalAmount = useMemo(
    () =>
      artPrints.reduce((acc, item) => acc + item.price * item.quantity, 0) +
      cartItems.reduce((acc, item) => acc + item.price, 0),
    [artPrints, cartItems]
  );

  const { handlePayClick } = usePayment({
    email,
    amount: totalAmount,
    country,
  });

  const handleEmailChange = (event: any) => setEmail(event.target.value);
  const handleCountryChange = (event: any) => setCountry(event.target.value);

  const updateArtPrintQuantity = useCallback(
    (index: number, increment: boolean) => {
      setArtPrints((prevArtPrints: Array<Record<string, any>>) => {
        const updatedArtPrints = [...prevArtPrints];
        if (increment) {
          updatedArtPrints[index].quantity++;
        } else if (updatedArtPrints[index].quantity > 1) {
          updatedArtPrints[index].quantity--;
        }
        return updatedArtPrints;
      });
    },
    [setArtPrints]
  );

  if (cartItems.length === 0 && artPrints.length === 0) {
    return <div className={styles.emptyCart}>Your Cart is Empty</div>;
  }

  return (
    <div>
      {cartItems.length > 0 && (
        <>
          <h3 className={styles.sectionTitle}>Original Art</h3>
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              item={item}
              isMobile={isMobile}
              onRemove={removeFromCart}
            />
          ))}
        </>
      )}
      {cartItems.length > 0 && artPrints.length > 0 && (
        <div className={styles.separator} />
      )}
      {artPrints.length > 0 && (
        <>
          <h3 className={styles.sectionTitle}>Art Prints</h3>
          {artPrints.map((item, index) => (
            <CartItem
              key={index}
              item={item}
              isMobile={isMobile}
              onRemove={removeFromCartPrint}
              onIncrease={() => updateArtPrintQuantity(index, true)}
              onDecrease={() => updateArtPrintQuantity(index, false)}
              quantity={item.quantity}
            />
          ))}
        </>
      )}
      <div className={styles.summary}>
        <div className={styles.total}>
          <span>Total: $</span>
          <span>{totalAmount}</span>
        </div>
        <Input
          prefix={<MailOutlined />}
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          type="email"
          className={styles.input}
        />
        <Input
          prefix={<MailOutlined />}
          placeholder="Enter your Country"
          value={country}
          onChange={handleCountryChange}
          type="email"
          className={styles.input}
        />
        <Button
          type="primary"
          className={styles.checkoutButton}
          onClick={handlePayClick}
          style={{marginTop:10}}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
