import Dashboard from '../models/Dashboard.js';

// Get all dashboards
export const getAllDashboards = async (req, res) => {
  try {
    const dashboards = await Dashboard.findAll();
    res.status(200).json(dashboards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get dashboard by ID
export const getDashboardById = async (req, res) => {
  try {
    const dashboard = await Dashboard.findByPk(req.params.id);
    if (!dashboard) {
      return res.status(404).json({ message: 'Dashboard not found' });
    }
    res.status(200).json(dashboard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new dashboard
export const createDashboard = async (req, res) => {
  try {
    const { link } = req.body;
    const newDashboard = await Dashboard.create({
      link
    });
    res.status(201).json(newDashboard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update dashboard
export const updateDashboard = async (req, res) => {
  try {
    const dashboard = await Dashboard.findByPk(req.params.id);
    if (!dashboard) {
      return res.status(404).json({ message: 'Dashboard not found' });
    }
    await dashboard.update(req.body);
    res.status(200).json(dashboard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete dashboard
export const deleteDashboard = async (req, res) => {
  try {
    const dashboard = await Dashboard.findByPk(req.params.id);
    if (!dashboard) {
      return res.status(404).json({ message: 'Dashboard not found' });
    }
    await dashboard.destroy();
    res.status(200).json({ message: 'Dashboard deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};