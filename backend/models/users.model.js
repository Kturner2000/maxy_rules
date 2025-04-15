const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  auth0Id: { type: String, required: true, unique: true }, // Store Auth0 user ID
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, 
    enum: ['dominant ', 'submissive'], 
    required: true
    },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);