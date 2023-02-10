const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")('sk_test_51MZ7ZvSEklETklfBHLDRm9Hzcp1ZbtYhyxDQSIS6HqD1E9fVa8rLHUbGQt1nQkKpPh6g3G1R8OSEL0inanSJteFQ00adfQCv3s');

//api
//app config
const app = express();

//middlewares
app.use(cors({origin: true}));
app.use(express.json());

//api routes
app.get('/', (request,response) => response.status(200).send('hello world'));
app.post('/payment/create', async (request, response) => {
    const total = request.query.total;
    console.log('payment request recieved: ', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//listen commands
exports.api = functions.https.onRequest(app);