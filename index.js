const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

const webhookNotifications = [];

// POST /pay - Initiate payment
app.post('/pay', async (req, res) => {
  const { order_id, buyer_email, buyer_name, buyer_phone, amount, webhook_url } = req.body;
  const api_key = process.env.API_KEY;
  try {
    const payload = { order_id, buyer_email, buyer_name, buyer_phone, amount };
    if (webhook_url) payload.webhook_url = webhook_url;
    const response = await axios.post(
      'https://zenoapi.com/api/payments/mobile_money_tanzania',
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': api_key,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.response?.data || error.message });
  }
});

// GET /order-status?order_id=...
app.get('/order-status', async (req, res) => {
  const { order_id } = req.query;
  const api_key = process.env.API_KEY;
  try {
    const response = await axios.get(
      `https://zenoapi.com/api/payments/order-status?order_id=${order_id}`,
      {
        headers: {
          'x-api-key': api_key,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.response?.data || error.message });
  }
});

// POST /payment-webhook - Receive webhook notifications
app.post('/payment-webhook', (req, res) => {
  const apiKey = req.headers['x-api-key'];
  // Validate apiKey if needed
  console.log('Webhook received:', req.body);
  webhookNotifications.push({
    receivedAt: new Date().toISOString(),
    body: req.body,
    apiKey: apiKey
  });
  res.status(200).json({ received: true });
});

app.get('/webhook-notifications', (req, res) => {
  res.json(webhookNotifications);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 