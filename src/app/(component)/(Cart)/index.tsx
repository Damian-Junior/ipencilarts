// Cart.js
import React from "react";
import { List, Button, Empty } from "antd";
interface CartProps {
  cartItems: Array<Record<string, any>>;
}
const Cart = (props: CartProps) => {
  const { cartItems } = props;
  return (
    <div>
      {cartItems.length > 0 ? (
        <List
          dataSource={cartItems}
          renderItem={(item: any) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                title={item.name}
                description={`Price: $${item.price}`}
              />
            </List.Item>
          )}
        />
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Your Cart is empty"
        />
      )}
      <Button type="primary">Checkout</Button>
    </div>
  );
};

export default Cart;
