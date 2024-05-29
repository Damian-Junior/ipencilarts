"use client";
import { Card, Row, Col, Button, Tag } from "antd";
import { useContext, useState, useEffect } from "react";
import styles from "./shop.module.css";
import Image from "next/image";
import { CartContext } from "../(Cart)/cartContext";
import { InView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
const Shop = () => {
  const { addToCart, shopArts, setShopArts } = useContext(CartContext);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const fetchShopArts = async () => {
      const querySnapshot = await getDocs(collection(db, "Shoparts"));
      const items:Array<Record<string, any>> = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setShopArts(items);
    };

    fetchShopArts();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 500); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTopVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div className={styles.imagesContainer}>
      <Row gutter={[16, 16]}>
        {shopArts.map((item, index: number) => (
          <InView triggerOnce threshold={1} key={index}>
            {({ inView, ref }) => (
              <Col
                key={index}
                xs={24}
                sm={24}
                md={12}
                lg={8}
                xl={6}
                ref={ref}
              
                style={{ position: "relative" }}
              >
                <Card
                  key={index}
                  className={
                    inView ? styles.visible_card : styles.invisible_card
                  }
                  hoverable
                  style={{
                    width: "95%",
                    marginRight: 5,
                  }}
                  cover={
                    <Image
                      width={940}
                      height={450}
                      alt={item.name}
                      src={item.src}
                    />
                  }
                >
                  <Card.Meta
                    title={<span style={{ color: "#fff" }}>{item.name}</span>}
                    description={
                      <span
                        style={{ color: "#fff" }}
                      >{`Price: $${item.price}`}</span>
                    }
                  />
                  <Button
                  disabled={item.sold}
                    type="primary"
                    onClick={() => addToCart(item)}
                    style={{
                      marginTop: 10,
                      backgroundColor: "#fff",
                      color: "#000",
                    }}
                  >
                    Add to Cart
                  </Button>
                </Card>
                {item.sold && (
                  <Tag
                    color="red"
                    style={{ position: "absolute", right: '5%', top: '0', borderRadius:'6px',  }}
                  >
                    Sold
                  </Tag>
                )}
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
            style={{ position: "fixed", bottom: "30%", right: "2%" }}
          >
            <span style={{ color: "#fff" }}>&#x1F879;</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;
