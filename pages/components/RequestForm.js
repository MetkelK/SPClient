import React, { useState, useEffect } from "react";

export default function DonateForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState(false);
  const [alertmessage, setAlertMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const info = {
      Name: name,
      Phone: number,
      Email: email,
      Message: message,
    };

    if (name && number && email && message) {
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
      setAlertMessage(data.error ? `${data.error}` : "Message Sent");

      setName("");
      setNumber("");
      setEmail("");
      setMessage("");
    } else {
      setAlertMessage("Please fill out all fields");
    }
  };
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div>
          <label htmlFor="InputName">Name</label>
          <input
            type="text"
            id="InputName"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </div>
        <div>
          <label htmlFor="InputNumber">Phone Number</label>
          <input
            type="tel"
            id="InputNumber"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          ></input>
        </div>
        <div>
          <label htmlFor="InputEmail">Email</label>
          <input
            typ="email"
            id="InputEmail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </div>
        <div>
          <label htmlFor="InputMessage">Message</label>
          <textarea
            id="InputMessage"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
        <p>{alertmessage}</p>
      </form>
    </div>
  );
}
