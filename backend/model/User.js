const mongoose = require('mongoose');
// import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 7,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);

// eger birden fazla export edecegimiz seyler varsa, asagidaki gibi yazilir

/*
 export const BirinciExport;
 export const IkinciExport;
*/
