import Plant from '../models/Plant.js';

// Get all plants
export const getAllPlants = async (req, res) => {
  try {
    const plants = await Plant.findAll();
    res.status(200).json(plants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get plant by ID
export const getPlantById = async (req, res) => {
  try {
    const plant = await Plant.findByPk(req.params.id);
    if (!plant) {
      return res.status(404).json({ message: 'Plant not found' });
    }
    res.status(200).json(plant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new plant
export const createPlant = async (req, res) => {
  try {
    const { plantcode, location, description } = req.body;
    const newPlant = await Plant.create({
      plantcode,
      location,
      description
    });
    res.status(201).json(newPlant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update plant
export const updatePlant = async (req, res) => {
  try {
    const plant = await Plant.findByPk(req.params.id);
    if (!plant) {
      return res.status(404).json({ message: 'Plant not found' });
    }
    await plant.update(req.body);
    res.status(200).json(plant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete plant
export const deletePlant = async (req, res) => {
  try {
    const plant = await Plant.findByPk(req.params.id);
    if (!plant) {
      return res.status(404).json({ message: 'Plant not found' });
    }
    await plant.destroy();
    res.status(200).json({ message: 'Plant deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};