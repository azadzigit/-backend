// utils/dummyData.js

// Dummy tenant data
const tenants = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      usage: 100, // in kWh
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      usage: 150, // in kWh
    },
    {
      id: 3,
      name: "David Brown",
      email: "david@example.com",
      usage: 120, // in kWh
    },
  ];
  
  // Dummy smart meter data
  const meterData = {
    totalUsage: 370, // in kWh
    billingRate: 0.15, // Price per kWh in dollars
    billingMonth: "September 2024",
  };
  
  // Function to calculate the bill for each tenant
  const calculateBills = () => {
    return tenants.map((tenant) => ({
      name: tenant.name,
      email: tenant.email,
      usage: tenant.usage,
      bill: (tenant.usage * meterData.billingRate).toFixed(2), // Bill in dollars
    }));
  };
  
  module.exports = { tenants, meterData, calculateBills };
  