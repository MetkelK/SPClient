import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function DonateForm() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(false);
  const [alertmessage, setAlertMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const info = {
      First: firstname,
      Last: lastname,
      Phone: number,
      Email: email,
      Message: message,
    };

    if (firstname && lastname && number && email && message) {
      setProcessing(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}pay-requests`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(info),
        }
      );

      const data = await res.json();
      console.log(data);
      if (data.statusCode == 400) {
        setError(true);
        setProcessing(false);
        setAlertMessage(data.error);
      } else {
        setAlertMessage("Message Sent");
        setFirstName("");
        setLastName("");
        setNumber("");
        setEmail("");
        setMessage("");
        setProcessing(false);
      }
    } else {
      setError(true);
      setAlertMessage("Please fill out all fields");
    }
  };

  return (
    <div className="flex flex-col flex-grow lg:w-3/4 xl:w-1/2 mx-auto">
      <div className="p-12 space-y-8">
        <h2 className="text-4xl">Who can access this fund?</h2>
        <p>
          This fund is for anyone who should not go to work because they are
          sick, but is worried about the financial risk of doing so. We will not
          require documentation of your workplace, but trust that those
          accessing the fund are in need of immediate support.
        </p>

        <h2 className="text-4xl">How many times can I apply?</h2>
        <p>
          You can apply as many times as you would like, but for right now, we
          can give out a maximum of $500 per person. This may change depending
          on how much money we have access to!
        </p>

        <h2 className="text-4xl">How much can I apply for?</h2>
        <p>
          You let us know how much money you will be losing by taking the time
          off work, and we will do our best to give you as much as possible, up
          to $500 total. This maximum may change depending on donations we
          receive and the demand on the fund.
        </p>

        <h2 className="text-4xl">When will I receive funds?</h2>
        <p>
          We are aiming to be fast at processing the requests. The delay depends
          on how much money we receive, when we can process your request, and
          how urgently you say you need your money. We are hoping for between
          2-5 days for each request, and we will try our best to be as fast as
          possible.
        </p>
      </div>

      <form
        onSubmit={sendMessage}
        className="flex flex-col items-center justify-center mx-4 lg:mx-12 xl:mx-16 mb-12 py-4 px-2 shadow-xl rounded "
      >
        <div className="w-full mb-4 px-4 flex flex-row">
          <input
            className="w-full h-auto p-3 placeholder-gray-600 border-b"
            type="text"
            id="InputFirstName"
            placeholder="First Name"
            title="First Name"
            aria-label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstname}
          ></input>
        </div>
        <div className="w-full mb-4 px-4 flex flex-row">
          <input
            className="w-full h-auto p-3 placeholder-gray-600 border-b"
            type="text"
            id="InputLastName"
            placeholder="Last Name"
            title="Last Name"
            aria-label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastname}
          ></input>
        </div>
        <div className="w-full mb-4 px-4 flex flex-row">
          <input
            className="w-full h-auto p-3 placeholder-gray-600 border-b"
            type="tel"
            id="InputNumber"
            placeholder="Telephone"
            title="Telephone"
            aria-label="Telephone"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          ></input>
        </div>
        <div className="w-full mb-4 px-4 flex flex-row">
          <input
            className="w-full h-auto p-3 placeholder-gray-600 border-b"
            type="email"
            id="InputEmail"
            placeholder="Email"
            title="Email"
            aria-label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </div>
        <div className="w-full mb-4 px-4 flex flex-row">
          <textarea
            className="w-full h-auto p-3 placeholder-gray-600 border-b"
            id="InputMessage"
            placeholder="Message"
            title="Message"
            aria-label="Message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
        </div>

        <button
          className="mb-4 rounded-full inline-block text-white bg-indigo-500 py-4 px-6 transition-opacity duration-150 ease-in-out transform hover:opacity-80"
          type="submit"
        >
          Send Message
        </button>
        {alertmessage == "Message Sent" ? (
          <span className="text-xs text-green-700">{alertmessage}</span>
        ) : (
          <span className="text-xs text-red-700">{alertmessage}</span>
        )}
        {processing && !error && (
          <FontAwesomeIcon icon={faSpinner} spin size="2x" />
        )}
      </form>
    </div>
  );
}
