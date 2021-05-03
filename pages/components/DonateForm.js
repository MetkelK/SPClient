import Head from "next/head";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE);

export default function DonateForm() {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  //   const [clientSecret, setClientSecret] = useState("");
  const [amount, setAmount] = useState("");
  const [secret, setSecret] = useState("");

  useEffect(() => {
    if (amount) {
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
    }
  }, [amount]);

  const handleChange = async (e) => {
    setDisabled(e.empty);
    setAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    setProcessing(true);
    setDisabled(true);
    e.preventDefault();
    const stripe = await stripePromise;
    //Call your backend to create the Checkout Session
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
    <div>
      <div className={styles.donateSection}>
        <h1>How can I support the cause?</h1>
        <p>
          Contributing money to our fund helps provide immediate relief to
          workers, allowing them to stay home, keep everyone safe, and sustain
          themselves and their families. You can donate here!
        </p>
        <h2>
          However, this fund will never alleviate the need for mandated paid
          sick days for all workers.
        </h2>
        <p>
          The fight for paid sick days in Ontario has been an ongoing effort by
          incredible activists for decades. You can support their work right now
          by taking action, signing petitions and contacting your MPPs, and
          checking out more information about the fight for paid sick days in
          Ontario by groups like the{" "}
          <a href="https://workersactioncentre.org/">Workers’ Action Centre</a>{" "}
          and{" "}
          <a href="https://www.15andfairness.org/">
            Fight for $15 and Fairness
          </a>
          .
        </p>
      </div>
      <form onSubmit={handleSubmit} className={styles.donateForm}>
        <label htmlFor="donationAmount">Amount</label>
        <input
          type="number"
          id="donationAmount"
          onChange={handleChange}
          value={amount}
          min="1"
        ></input>
        <button type="submit" disabled={disabled}>
          Donate
        </button>
      </form>
      {processing && (
        <div className={styles.processSpinner}>
          <i className="fa fa-spinner fa-pulse fa-fw"></i>
        </div>
      )}
    </div>
  );
}
