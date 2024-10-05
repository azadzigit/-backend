// routes/billingRoutes.js

const express = require('express');
const { calculateBills } = require('.../utils/dummyData');
const router = express.Router();

// Route to get all tenants' billing information
router.get('/bills', (req, res) => {
  const bills = calculateBills();
  res.json(bills);
});

module.exports = router;
