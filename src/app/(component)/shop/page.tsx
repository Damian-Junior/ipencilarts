"use client";
import { Card, Row, Col, Button, } from "antd";
import { useContext, useState, useEffect } from "react";
import styles from "./shop.module.css";
import { imageData } from "../_shared/contants";
import Image from "next/image";
import { CartContext } from "../(Cart)/cartContext";
import { InView } from "react-intersection-observer";
import { motion, AnimatePresence, } from 'framer-motion';


const Shop = () => {
  const { addToCart } = useContext(CartContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 500); // Adjust threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTopVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div className={styles.imagesContainer}>
      <Row gutter={[16, 16]}>
        {imageData.map((item, index: number) => (
          <InView triggerOnce threshold={0.2} key={index}>
            {({ inView, ref, }) => (
              <Col key={index} xs={24} sm={24} md={12} lg={8} xl={6} ref={ref}>
                <Card
                key={index}
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
      <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          variants={scrollToTopVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="scroll-to-top"
        >
          <span>Top</span>
        </motion.button>
      )}
    </AnimatePresence>
    </div>
  );
};

export default Shop;
