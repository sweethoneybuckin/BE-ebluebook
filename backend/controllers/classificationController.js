import Classification from '../models/Classification.js';

// Get all classifications
export const getAllClassifications = async (req, res) => {
  try {
    const classifications = await Classification.findAll();
    res.status(200).json(classifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get classification by ID
export const getClassificationById = async (req, res) => {
  try {
    const classification = await Classification.findByPk(req.params.id);
    if (!classification) {
      return res.status(404).json({ message: 'Classification not found' });
    }
    res.status(200).json(classification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new classification
export const createClassification = async (req, res) => {
  try {
    const { code, name, description } = req.body;
    const newClassification = await Classification.create({
      code,
      name,
      description
    });
    res.status(201).json(newClassification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update classification
export const updateClassification = async (req, res) => {
  try {
    const classification = await Classification.findByPk(req.params.id);
    if (!classification) {
      return res.status(404).json({ message: 'Classification not found' });
    }
    await classification.update(req.body);
    res.status(200).json(classification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete classification
export const deleteClassification = async (req, res) => {
  try {
    const classification = await Classification.findByPk(req.params.id);
    if (!classification) {
      return res.status(404).json({ message: 'Classification not found' });
    }
    await classification.destroy();
    res.status(200).json({ message: 'Classification deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};