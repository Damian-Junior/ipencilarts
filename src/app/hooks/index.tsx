"use client";
import { message } from "antd";
import { useState, useContext, useEffect } from "react";
import { usePaystackPayment } from "react-paystack";
import { CartContext } from "../(component)/(Cart)/cartContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import axios from "axios";
import emailjs from "@emailjs/browser";
const publicKey = `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`;
type UsePaymentProps = {
  email: string;
  amount: number;
  country: string;
};
const usePayment = (props: UsePaymentProps) => {
  const { email, amount, country } = props;
  const [reference, setReference] = useState("");
  const { clearCart, cartItems, artPrints, shopArts, setShopArts, onClose } =
    useContext(CartContext);
  const [rate, setRate] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get("/api/exchange-rate");
        setRate(response.data.rate);
      } catch (error) {
        setError("Failed to fetch exchange rate");
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRate();
  }, []);
  // function to update shopStore after purchase
  const updateSoldProperty = async () => {
    // Create a set of IDs from the cart for quick lookup
    const cartIds = new Set(cartItems.map((item) => item.src));

    // Iterate over the items array and update the sold property if the item is in the cart
    const newShopArt = shopArts.map((item) => {
      if (cartIds.has(item.src)) {
        return { ...item, sold: true };
      }
      return item;
    });

    // Update Firestore with the new sold status
    await Promise.all(
      newShopArt.map(async (item) => {
        if (item.sold) {
          const itemDoc = doc(db, "shopArts", item.id);
          await updateDoc(itemDoc, { sold: true });
        }
      })
    );

    setShopArts(newShopArt); // Correctly update the state with the newShopArt
    console.log(newShopArt, "updated");
  };
  // function to dispatch email of purchased art
  const sendEmail = () => {
    // Prepare the data to send based on cart contents
    const emailParams = {
      to_name: `${email}`,
      from_name: "emmydollar98@gmail.com",
      message: prepareMessage(cartItems, artPrints, email, country),
    };

    emailjs
      .send(
        "service_84hblrn",
        "template_yxgjdf4",
        emailParams,
        `${process.env.EMAILJS_USER_ID}`
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
        },
        (error) => {
          console.log("Failed to send email:", error.text);
        }
      );
  };
  const config = {
    reference: reference,
    email,
    amount: Math.round(amount * 100 * rate), 
    publicKey,
    currency: "NGN",
  };

  const initializePayment = usePaystackPayment(config);
  const handlePayClick = async () => {
    if (!email || !amount) {
      message.error("Please enter email and amount");
      return;
    }

    setReference(generateUniqueReference()); 
    try {
      !loading &&
        (await initializePayment({
          onSuccess: () => {
            sendEmail();
            message.success("Payment was successfull");
            updateSoldProperty();
            clearCart();
            onClose();
          },
        }));
    } catch (error) {
      console.error("Payment error:", error);
      message.success(`Payment failed: ${error}`);
    }
  };

  return {
    handlePayClick,
  };
};

export default usePayment;

function generateUniqueReference() {
  const timestamp = Date.now();
  const randomPart = Math.random().toString(36).slice(2, 7); // Generate a random string
  return `ref_${timestamp}-${randomPart}`;
}
// This function combines items from two cart arrays into a single message
const prepareMessage = (
  items1: Array<Record<string, any>>,
  items2: Array<Record<string, any>>,
  email: string,
  country: string
) => {
  // Format the items for each section
  const formatItems = (items: any, title: string) => {
    const formattedItems = items
      .map(
        (item: any) =>
          `Item: ${item.name}, Quantity: ${item.quantity ?? 1}, Price: ${
            item.price
          }`
      )
      .join("\n");

    return `${title}:\n${formattedItems}`;
  };

  // Format each section
  const originalsSection = formatItems(items1, "Originals");
  const printsSection = formatItems(items2, "Prints");

  // Combine both sections
  return `Email of Buyer: ${email}\n Country: ${country}\n ${originalsSection}\n\n${printsSection}`;
};
