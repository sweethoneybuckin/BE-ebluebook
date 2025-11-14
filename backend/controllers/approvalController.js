import Approval from '../models/Approval.js';

// Get all approvals
export const getAllApprovals = async (req, res) => {
  try {
    const approvals = await Approval.findAll();
    res.status(200).json(approvals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get approval by ID
export const getApprovalById = async (req, res) => {
  try {
    const approval = await Approval.findByPk(req.params.id);
    if (!approval) {
      return res.status(404).json({ message: 'Approval not found' });
    }
    res.status(200).json(approval);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new approval
export const createApproval = async (req, res) => {
  try {
    const { approvalnopeg, approvalname, approvalemail, approvalpassword } = req.body;
    const newApproval = await Approval.create({
      approvalnopeg,
      approvalname,
      approvalemail,
      approvalpassword
    });
    res.status(201).json(newApproval);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update approval
export const updateApproval = async (req, res) => {
  try {
    const approval = await Approval.findByPk(req.params.id);
    if (!approval) {
      return res.status(404).json({ message: 'Approval not found' });
    }
    await approval.update(req.body);
    res.status(200).json(approval);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete approval
export const deleteApproval = async (req, res) => {
  try {
    const approval = await Approval.findByPk(req.params.id);
    if (!approval) {
      return res.status(404).json({ message: 'Approval not found' });
    }
    await approval.destroy();
    res.status(200).json({ message: 'Approval deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};