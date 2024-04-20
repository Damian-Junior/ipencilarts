"use client";
import { Card, Row, Col, Button, message } from "antd";
import { useContext } from "react";
import styles from "./shop.module.css";
import { imageData } from "../_shared/contants";
import Image from "next/image";
import { CartContext } from "../(Cart)/cartContext";
import { InView } from "react-intersection-observer";
const Shop = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className={styles.imagesContainer}>
      <Row gutter={[16, 16]}>
        {imageData.map((item, index: number) => (
          <InView triggerOnce threshold={0.3}>
            {({ inView, ref, entry }) => (
              <Col key={index} xs={24} sm={24} md={12} lg={8} xl={6} ref={ref}>
                <Card
                  className={
                    inView ? styles.visible_card : styles.invisible_card
                  }
                  hoverable
                  style={{
                    width: "95%",
                    marginRight: 5,
                    color: inView ? "red" : "pink",
                  }}
                  cover={
                    <Image
                      width={320}
                      height={320}
                      alt={item.name}
                      src={item.src}
                    />
                  }
                >
                  <Card.Meta
                    title={
                      <span style={{ color: "darkorange" }}>{item.name}</span>
                    }
                    description={
                      <span
                        style={{ color: "darkorange" }}
                      >{`Price: ${item.price}`}</span>
                    }
                  />
                  <Button
                    type="primary"
                    onClick={() => addToCart(item)}
                    style={{
                      marginTop: 10,
                      backgroundColor: "darkorange",
                      color: "#fff",
                    }}
                  >
                    Add to Cart
                  </Button>
                </Card>
              </Col>
            )}
          </InView>
        ))}
      </Row>
    </div>
  );
};

export default Shop;
