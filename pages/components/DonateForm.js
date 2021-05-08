import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE);

export default function DonateForm() {
  const [hold, setHold] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const [amount, setAmount] = useState("");
  const [secret, setSecret] = useState("");

  useEffect(() => {
    if (amount) {
      setHold(true);
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
          setDisabled(false);
          setHold(false);
        });
    }
  }, [amount]);

  const handleChange = async (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    setProcessing(true);
    setDisabled(true);
    e.preventDefault();

    const stripe = await stripePromise;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}donations/payments`,
      {
        method: "POST",
      }
    );
    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: secret,
    });
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
      setError(result.error.message);
      console.log(result.error.message);
    }
  };

  return (
    <div className="flex flex-col flex-grow">
      <div className="p-12 ">
        <h1 className="text-5xl mb-8">How can I support the cause?</h1>
        <p className="mb-8">
          Contributing money to our fund helps provide immediate relief to
          workers, allowing them to stay home, keep everyone safe, and sustain
          themselves and their families. You can donate here!
        </p>
        <h2 className="text-4xl mb-8">
          However, this fund will never alleviate the need for mandated paid
          sick days for all workers.
        </h2>
        <p className="mb-8">
          The fight for paid sick days in Ontario has been an ongoing effort by
          incredible activists for decades. You can support their work right now
          by taking action, signing petitions and contacting your MPPs, and
          checking out more information about the fight for paid sick days in
          Ontario by groups like the{" "}
          <a
            className="text-indigo-500 underline"
            href="https://workersactioncentre.org/"
            target="_blank"
          >
            Workers’ Action Centre
          </a>{" "}
          and{" "}
          <a
            className="text-indigo-500 underline"
            href="https://www.15andfairness.org/"
            target="_blank"
          >
            Fight for $15 and Fairness
          </a>
          .
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-auto flex flex-col items-center justify-center p-12 flex-grow-0 mx-auto md:w-1/2 lg:"
      >
        <div className="flex flex-row w-full items-center justify-center border border-gray-300 divide-solid mb-4">
          <label
            className="block text-sm font-medium text-gray-700 p-2"
            htmlFor="donationAmount"
          >
            Amount
          </label>

          <input
            type="number"
            id="donationAmount"
            onChange={handleChange}
            value={amount}
            min="1"
            className="py-2 pl-1 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
            placeholder="0.00"
          ></input>
        </div>
        <button
          disabled={disabled}
          className="mb-4 rounded-full inline-block text-white bg-indigo-500 py-4 px-6 transition-opacity duration-150 ease-in-out transform hover:opacity-80 disabled:opacity-50"
          type="submit"
        >
          Donate
        </button>
        <div className="w-full">
          {processing && (
            <i className="fa fa-spinner fa-pulse fa-fw text-5xl"></i>
          )}
          {hold && <p className="text-gray-400 text-center"> Please wait</p>}
          {error && <p className="text-red-600 text-center">error</p>}
        </div>
      </form>
    </div>
  );
}
