const express = require('express');
const router = express.Router();
const Location = require('../models/Location');
const User = require('../models/User');

// Get all locations
router.get('/locations', async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new location
router.post('/locations', async (req, res) => {
  const { name, address, capacity} = req.body;
  const location = new Location({ name, address, capacity });

  try {
    const savedLocation = await location.save();
    res.status(201).json(savedLocation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a location
router.patch('/locations/:id', async (req, res) => {
  try {
    const updatedLocation = await Location.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedLocation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a location (soft delete)
router.delete('/locations/:id', async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    location.deleted_at = new Date();
    const updatedLocation = await location.save();
    res.json(updatedLocation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
