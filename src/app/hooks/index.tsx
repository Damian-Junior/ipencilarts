"use client";
import { message } from "antd";
import{ useState, useContext } from "react";
import { usePaystackPayment } from "react-paystack";
import { CartContext } from "../(component)/(Cart)/cartContext";
const publicKey = "pk_test_119e8cd6b656668fe975c7f7ccae9709ebf4efa3";
type UsePaymentProps = {
  email: string;
  amount: number;
};
const usePayment = (props: UsePaymentProps) => {
  const { email, amount } = props;
  const [reference, setReference] = useState("");
  const { clearCart } = useContext(CartContext);
  const config = {
    reference: reference,
    email,
    amount: amount * 100, // Paystack uses kobo (multiply amount by 100)
    publicKey,
    currency: "NGN",
  };

  const initializePayment = usePaystackPayment(config);

  const handlePayClick = async () => {
    if (!email || !amount) {
      message.error("Please enter email and amount");
      return;
    }

    setReference(generateUniqueReference()); // Replace with a function to generate a unique reference

    try {
      await initializePayment({
        onSuccess: () => {
          message.success("Payment was successfull");
          clearCart();
        },
      });
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed!");
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
