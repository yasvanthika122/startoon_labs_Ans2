const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: String,
  gender: String,
  age: Number,
  picture: String,
  phone: String,
  email: String,
  patientId: String,
  medicalDetails: {
    affectedSide: String,
    condition: String,
    speciality: String,
    medicalHistory: String
  },
  goalReached: Number
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;