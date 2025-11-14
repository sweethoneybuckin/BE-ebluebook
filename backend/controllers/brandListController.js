import BrandList from '../models/BrandList.js';

// Get all brands
export const getAllBrands = async (req, res) => {
  try {
    const brands = await BrandList.findAll();
    res.status(200).json(brands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get brand by ID
export const getBrandById = async (req, res) => {
  try {
    const brand = await BrandList.findByPk(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: 'Brand not found' });
    }
    res.status(200).json(brand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new brand
export const createBrand = async (req, res) => {
  try {
    const { brand_name, product, description, status, MSDS, information } = req.body;
    const newBrand = await BrandList.create({
      brand_name,
      product,
      description,
      status,
      MSDS,
      information
    });
    res.status(201).json(newBrand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update brand
export const updateBrand = async (req, res) => {
  try {
    const brand = await BrandList.findByPk(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: 'Brand not found' });
    }
    await brand.update(req.body);
    res.status(200).json(brand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete brand
export const deleteBrand = async (req, res) => {
  try {
    const brand = await BrandList.findByPk(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: 'Brand not found' });
    }
    await brand.destroy();
    res.status(200).json({ message: 'Brand deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};