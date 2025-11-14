import RefineryUnit from '../models/RefineryUnit.js';

// Get all refinery units
export const getAllRefineryUnits = async (req, res) => {
  try {
    const refineryUnits = await RefineryUnit.findAll();
    res.status(200).json(refineryUnits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get refinery unit by ID
export const getRefineryUnitById = async (req, res) => {
  try {
    const refineryUnit = await RefineryUnit.findByPk(req.params.id);
    if (!refineryUnit) {
      return res.status(404).json({ message: 'Refinery Unit not found' });
    }
    res.status(200).json(refineryUnit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new refinery unit
export const createRefineryUnit = async (req, res) => {
  try {
    const { refineryunitname, refineryunitlocation } = req.body;
    const newRefineryUnit = await RefineryUnit.create({
      refineryunitname,
      refineryunitlocation
    });
    res.status(201).json(newRefineryUnit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update refinery unit
export const updateRefineryUnit = async (req, res) => {
  try {
    const refineryUnit = await RefineryUnit.findByPk(req.params.id);
    if (!refineryUnit) {
      return res.status(404).json({ message: 'Refinery Unit not found' });
    }
    await refineryUnit.update(req.body);
    res.status(200).json(refineryUnit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete refinery unit
export const deleteRefineryUnit = async (req, res) => {
  try {
    const refineryUnit = await RefineryUnit.findByPk(req.params.id);
    if (!refineryUnit) {
      return res.status(404).json({ message: 'Refinery Unit not found' });
    }
    await refineryUnit.destroy();
    res.status(200).json({ message: 'Refinery Unit deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};