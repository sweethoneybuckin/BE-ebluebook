import Creator from '../models/Creator.js';

// Get all creators
export const getAllCreators = async (req, res) => {
  try {
    const creators = await Creator.findAll();
    res.status(200).json(creators);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get creator by ID
export const getCreatorById = async (req, res) => {
  try {
    const creator = await Creator.findByPk(req.params.id);
    if (!creator) {
      return res.status(404).json({ message: 'Creator not found' });
    }
    res.status(200).json(creator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new creator
export const createCreator = async (req, res) => {
  try {
    const { creatornopeg, creatorname, creatoremail, creatorpassword } = req.body;
    const newCreator = await Creator.create({
      creatornopeg,
      creatorname,
      creatoremail,
      creatorpassword
    });
    res.status(201).json(newCreator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update creator
export const updateCreator = async (req, res) => {
  try {
    const creator = await Creator.findByPk(req.params.id);
    if (!creator) {
      return res.status(404).json({ message: 'Creator not found' });
    }
    await creator.update(req.body);
    res.status(200).json(creator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete creator
export const deleteCreator = async (req, res) => {
  try {
    const creator = await Creator.findByPk(req.params.id);
    if (!creator) {
      return res.status(404).json({ message: 'Creator not found' });
    }
    await creator.destroy();
    res.status(200).json({ message: 'Creator deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};