const axios = require("axios");


  const createPayment = async ({name, price}) => {
    price = parseInt(price , 12)
    console.log(name, price)
    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
      payer_email: "test_user_1278610210@testuser.com",
      items: [
        {
          title: name.name,
          description: "Dummy description",
          picture_url: "http://www.myapp.com/myimage.jpg",
          category_id: "category123",
          quantity: 1,
          unit_price: price,
        },
      ],
      back_urls: {
        failure: "/failure",
        pending: "/pending",
        success: "/success",
      },
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });
   
    return payment.data
  }

  const  createSubscription = async ()=> {
    const url = "https://api.mercadopago.com/preapproval";

    const body = {
      reason: "Suscripción de ejemplo",
      auto_recurring: {
        frequency: 1,
        frequency_type: "months",
        transaction_amount: 10,
        currency_id: "ARS",
      },
      back_url: "https://google.com.ar",
      payer_email: "test_user_1278610210@testuser.com",
    };

    const subscription = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    return subscription.data;
  }


module.exports ={createPayment , createSubscription };
