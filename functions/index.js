const stripe = require("stripe")(
  // eslint-disable-next-line max-len
  "sk_test_51NcXFPCk5meLPyzkazijTfSfLI0FKHIHAAe3xV3s80Bmo1BFFvB5yTbSiCPcbFbijwrzuNjFtjv1xPEBcLXjpxfX00rGxA4pXO",
);
const express = require("express");
const cors = require("cors");
const functions = require("firebase-functions");

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log(`total is ${total}`);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "USD",
  });
  console.log(paymentIntent);
  response.status(201).send({ clientSecret: paymentIntent.client_secret });
});

exports.api = functions.https.onRequest(app);
