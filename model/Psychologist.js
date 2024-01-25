// Psychologist.js

const mongoose = require("mongoose");

const PsychologistSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  City: {
    type: String,
  },
  Role: {
    type: String,
    default: "Psychologist",
  },
  Description: {
    type: String,
  },
  Speciality: {
    type: String,
  },
  Password: {
    type: String,
  },
});

const Psychologist = mongoose.model('Psychologist', PsychologistSchema)

module.exports = Psychologist
