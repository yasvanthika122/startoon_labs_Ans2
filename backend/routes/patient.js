const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

router.post('/create', async (req, res) => {
  const patient = new Patient(req.body);
  try {
    await patient.save();
    res.send(patient);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/:patientId', async (req, res) => {
  try {
    const patient = await Patient.findOne({ patientId: req.params.patientId });
    res.send(patient);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.patch('/:patientId', async (req, res) => {
  try {
    const patient = await Patient.findOneAndUpdate({ patientId: req.params.patientId }, req.body, { new: true });
    res.send(patient);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;