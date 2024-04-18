// Cart.js
import React from "react";
import { Button, Empty, Image, Divider, Tooltip } from "antd";
import styles from "./cart.module.css";
import { CloseCircleOutlined } from "@ant-design/icons";
interface CartProps {
  cartItems: Array<Record<string, any>>;
  removeFromCart: (productId: string) => void;
}
const Cart = (props: CartProps) => {
  const { cartItems, removeFromCart } = props;
  return (
    <div>
      {cartItems.length > 0 ? (
        cartItems.map((items) => {
          return (
            <div className={styles.container}>
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
                <p className={styles.text} style={{ fontSize: "1.5em" }}>
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
        <div className={styles.checkout}>
          <Button type="primary">Checkout</Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
