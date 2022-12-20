const {Users} = require("../models/users");
require('dotenv').config()
const express = require('express')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const router = express.Router()

const user = async (req, res, next)=>{
    try{
        const user = await Users.findAll();
        res.send(user)
    }catch(error){
        next(error);
    } 
}
const newUser= async (req, res) => {

    const { email, name } = req.body;

    if (!email && !name) {
      return res.sendStatus(400);
    }

    try {
      // Pasa el nombre completo del cliente y
      // parámetros adicionales
      const customer = await stripe.customers.create({
        email: email,
        name: name
      })

      if (customer) {
        // guarda el customer.id como stripeCustomerId
        // en tu base de datos.
      
      //   let userss = await Users.create({
      //     where: {
      //       customer: customer.id 
      //     },
      // }); 
      // customer.addUsers(userss)
      // res.status(200).json(customer);
        return res.json({ customer: customer.id });
      }

    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }
 const subscription = async (req, res) => {
    const { customerId, priceId } = req.body;

    if (!customerId && !priceId) {
      return res.sendStatus(403);
    }

    try {
      const subscription = await stripe.subscriptions.create({
        customer: customerId,
        items: [{ price: priceId }],
        payment_behavior: 'default_incomplete',
        expand: ['latest_invoice.payment_intent'],
      });

      res.json({
        subscriptionId: subscription.id,
        clientSecret: subscription.latest_invoice.payment_intent.client_secret,
      });

    } catch (error) {
      return res.sendStatus(400)
    }
  }
 const deletedSubscription = async (req, res) => {
    try {
      const deletedSubscription = await stripe.subscriptions.del(
        req.body.subscriptionId
      );
      res.send(deletedSubscription);

    } catch (error) {
      console.log(error);
    }
  };
module.exports = {
user,newUser,subscription,deletedSubscription
};
