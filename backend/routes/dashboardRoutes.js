import express from 'express';
import {
  getAllDashboards,
  getDashboardById,
  createDashboard,
  updateDashboard,
  deleteDashboard
} from '../controllers/dashboardController.js';

const router = express.Router();

router.get('/', getAllDashboards);
router.get('/:id', getDashboardById);
router.post('/', createDashboard);
router.put('/:id', updateDashboard);
router.delete('/:id', deleteDashboard);

export default router;