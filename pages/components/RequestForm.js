import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";

export default function DonateForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [processing, setProcessing] = useState(false);
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
      }

      setAlertMessage("Message Sent");
      setName("");
      setNumber("");
      setEmail("");
      setMessage("");
    } else {
      setError(true);
      setAlertMessage("Please fill out all fields");
    }
  };

  return (
    <div>
      <div className={styles.requestFAQ}>
        <h1>Who can access this fund?</h1>
        <p>
          This fund is for anyone who should not go to work because they are
          sick, but is worried about the financial risk of doing so. We will not
          require documentation of your workplace, but trust that those
          accessing the fund are in need of immediate support.
        </p>

        <h1>How many times can I apply?</h1>
        <p>
          You can apply as many times as you would like, but for right now, we
          can give out a maximum of $500 per person. This may change depending
          on how much money we have access to!
        </p>

        <h1>How much can I apply for?</h1>
        <p>
          You let us know how much money you will be losing by taking the time
          off work, and we will do our best to give you as much as possible, up
          to $500 total. This maximum may change depending on donations we
          receive and the demand on the fund.
        </p>

        <h1>When will I receive funds?</h1>
        <p>
          We are aiming to be fast at processing the requests. The delay depends
          on how much money we receive, when we can process your request, and
          how urgently you say you need your money. We are hoping for between
          2-5 days for each request, and we will try our best to be as fast as
          possible.
        </p>
      </div>

      <form onSubmit={sendMessage} className={styles.requestForm}>
        <label htmlFor="InputName">Name</label>
        <input
          type="text"
          id="InputName"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>

        <label htmlFor="InputNumber">Phone Number</label>
        <input
          type="tel"
          id="InputNumber"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        ></input>

        <label htmlFor="InputEmail">Email</label>
        <input
          typ="email"
          id="InputEmail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>

        <label htmlFor="InputMessage">Message</label>
        <textarea
          id="InputMessage"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>

        <button type="submit">Send Message</button>
        <p>{alertmessage}</p>
        {processing && !error && (
          <div className={styles.processSpinner}>
            <i className="fa fa-spinner fa-pulse fa-fw"></i>
          </div>
        )}
      </form>
    </div>
  );
}
