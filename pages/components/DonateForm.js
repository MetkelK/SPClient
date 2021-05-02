import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE);

export default function DonateForm() {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const [amount, setAmount] = useState("");
  const [secret, setSecret] = useState("");

  useEffect(() => {
    window
      .fetch(`${process.env.NEXT_PUBLIC_API_URL}donations/payments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSecret(data.id);
        console.log(data);
      });
  }, [amount]);

  const handleChange = async (e) => {
    setDisabled(e.empty);
    setAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const stripe = await stripePromise;
    // Call your backend to create the Checkout Session
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}donations/payments`,
      {
        method: "POST",
      }
    );
    const session = await response.json();
    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: secret,
    });
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="donationAmount">Amount</label>
        <input
          type="number"
          id="donationAmount"
          onChange={handleChange}
          value={amount}
          min="1"
        ></input>
      </div>

      <button type="submit" disabled={disabled}>
        Donate
      </button>
    </form>
  );
}
