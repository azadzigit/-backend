const mongoose = require('mongoose');

const MeterSchema = new mongoose.Schema({
  meterId: { type: String, required: true, unique: true },
  tenants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  usageData: [{
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    usage: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
  }],
});

module.exports = mongoose.model('Meter', MeterSchema);
