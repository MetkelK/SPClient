# Sick Pay Solidarity Fund

This project is a mockup of the [Sick Pay Solidarity Fund](https://www.sickpaysolidarity.ca/)

[Frontend Site](https://sick-pay-fund.vercel.app/)

[Github link to Backend Server](https://github.com/MetkelK/SPServer)

## About

The site needed to take sick pay requests from users that could be easily viewed by an administrator while also processing payments in the form of donations. A headless cms seemed like the best approach and strapi was chosen for its role-based access control, controller customization and plugins support. Stripe was chosen as a payment processor due to its extensive documentation and testing environment.

## Features

### Requests

Request page features a form that takes info and sends it to MongoDB. Basic validation is included along with a message status display.

### Donations

Stripe is run in test mode and you can use the following card numbers to process a payment

#### Test Card Number

| Card             | Number           |
| ---------------- | ---------------- |
| Visa             | 4242424242424242 |
| Mastercard       | 5555555555554444 |
| American Express | 378282246310005  |

You can also test for specific responses and errors. Stripe checkout will handle any issues that come up.

#### Testing for Responses & Errors

| Scenario                                   | Number           |
| ------------------------------------------ | ---------------- |
| Charge is declined with insufficient funds | 4000000000009995 |
| Charge is declined with lost card          | 4000000000009987 |
| Charge is declined with stolen card        | 4000000000009979 |
| Charge is declined with expired card       | 4000000000000069 |

## Technology

### Front-end

- NextJs
- Stripe
- Tailwind CSS
- Font Awesome

### Back-end

- Strapi
- Stripe
- MongoDB

## Install

### Create stripe account

Go to [Stripe](https://stripe.com/docs), create an account and get an api key

### Create front-end client

```

git clone https://github.com/MetkelK/SPClient.git

npm install


```

In the DonateForm.js component replace process.env.NEXT_PUBLIC_STRIPE with the key on your stripe account

### Create back-end server

```
git clone https://github.com/MetkelK/SPServer.git

npm install

```

In the DonateForm and RequestForm components replace process.env.NEXT_PUBLIC_API_URL with localhost:1337
