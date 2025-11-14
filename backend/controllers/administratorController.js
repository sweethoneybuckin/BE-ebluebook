import Administrator from '../models/Administrator.js';

// Get all administrators
export const getAllAdministrators = async (req, res) => {
  try {
    const administrators = await Administrator.findAll();
    res.status(200).json(administrators);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get administrator by ID
export const getAdministratorById = async (req, res) => {
  try {
    const administrator = await Administrator.findByPk(req.params.id);
    if (!administrator) {
      return res.status(404).json({ message: 'Administrator not found' });
    }
    res.status(200).json(administrator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new administrator
export const createAdministrator = async (req, res) => {
  try {
    const { administratornopeg, administratorname, administratoremail, administratorpassword } = req.body;
    const newAdministrator = await Administrator.create({
      administratornopeg,
      administratorname,
      administratoremail,
      administratorpassword
    });
    res.status(201).json(newAdministrator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update administrator
export const updateAdministrator = async (req, res) => {
  try {
    const administrator = await Administrator.findByPk(req.params.id);
    if (!administrator) {
      return res.status(404).json({ message: 'Administrator not found' });
    }
    await administrator.update(req.body);
    res.status(200).json(administrator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete administrator
export const deleteAdministrator = async (req, res) => {
  try {
    const administrator = await Administrator.findByPk(req.params.id);
    if (!administrator) {
      return res.status(404).json({ message: 'Administrator not found' });
    }
    await administrator.destroy();
    res.status(200).json({ message: 'Administrator deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};