import LogHistory from '../models/LogHistory.js';
import Creator from '../models/Creator.js';
import Approval from '../models/Approval.js';
import BlueBookDB from '../models/BlueBookDB.js';

// Get all log histories
export const getAllLogHistories = async (req, res) => {
  try {
    const logs = await LogHistory.findAll({
      include: [
        {
          model: Creator,
          as: 'creator',
          attributes: ['creatornopeg', 'creatorname']
        },
        {
          model: Approval,
          as: 'approver',
          attributes: ['approvalnopeg', 'approvalname']
        },
        {
          model: BlueBookDB,
          as: 'bluebook',
          attributes: ['bluebookdbid', 'material_name']
        }
      ]
    });
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get log history by ID
export const getLogHistoryById = async (req, res) => {
  try {
    const log = await LogHistory.findByPk(req.params.id, {
      include: [
        {
          model: Creator,
          as: 'creator',
          attributes: ['creatornopeg', 'creatorname']
        },
        {
          model: Approval,
          as: 'approver',
          attributes: ['approvalnopeg', 'approvalname']
        },
        {
          model: BlueBookDB,
          as: 'bluebook',
          attributes: ['bluebookdbid', 'material_name']
        }
      ]
    });
    if (!log) {
      return res.status(404).json({ message: 'Log history not found' });
    }
    res.status(200).json(log);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new log history
export const createLogHistory = async (req, res) => {
  try {
    const { user_nopeg, activity, object, ip_address, approver_nopeg } = req.body;
    const newLog = await LogHistory.create({
      user_nopeg,
      activity,
      object,
      ip_address,
      approver_nopeg
    });
    res.status(201).json(newLog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update log history
export const updateLogHistory = async (req, res) => {
  try {
    const log = await LogHistory.findByPk(req.params.id);
    if (!log) {
      return res.status(404).json({ message: 'Log history not found' });
    }
    await log.update(req.body);
    res.status(200).json(log);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete log history
export const deleteLogHistory = async (req, res) => {
  try {
    const log = await LogHistory.findByPk(req.params.id);
    if (!log) {
      return res.status(404).json({ message: 'Log history not found' });
    }
    await log.destroy();
    res.status(200).json({ message: 'Log history deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};