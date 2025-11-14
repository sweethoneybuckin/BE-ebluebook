import BlueBookDB from '../models/BlueBookDB.js';
import BrandList from '../models/BrandList.js';

// Get all bluebook entries
export const getAllBlueBooks = async (req, res) => {
  try {
    const blueBooks = await BlueBookDB.findAll({
      include: [{
        model: BrandList,
        attributes: ['brandlistid', 'brand_name']
      }]
    });
    res.status(200).json(blueBooks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get bluebook by ID
export const getBlueBookById = async (req, res) => {
  try {
    const blueBook = await BlueBookDB.findByPk(req.params.id, {
      include: [{
        model: BrandList,
        attributes: ['brandlistid', 'brand_name']
      }]
    });
    if (!blueBook) {
      return res.status(404).json({ message: 'BlueBook entry not found' });
    }
    res.status(200).json(blueBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new bluebook entry
export const createBlueBook = async (req, res) => {
  try {
    const {
      material_number,
      material_name,
      brand,
      product_name,
      MSDS,
      classification,
      category,
      utility,
      minimum_stock,
      ru,
      unit
    } = req.body;
    
    const newBlueBook = await BlueBookDB.create({
      material_number,
      material_name,
      brand,
      product_name,
      MSDS,
      classification,
      category,
      utility,
      minimum_stock,
      ru,
      unit
    });
    res.status(201).json(newBlueBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update bluebook entry
export const updateBlueBook = async (req, res) => {
  try {
    const blueBook = await BlueBookDB.findByPk(req.params.id);
    if (!blueBook) {
      return res.status(404).json({ message: 'BlueBook entry not found' });
    }
    await blueBook.update(req.body);
    res.status(200).json(blueBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete bluebook entry
export const deleteBlueBook = async (req, res) => {
  try {
    const blueBook = await BlueBookDB.findByPk(req.params.id);
    if (!blueBook) {
      return res.status(404).json({ message: 'BlueBook entry not found' });
    }
    await blueBook.destroy();
    res.status(200).json({ message: 'BlueBook entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};