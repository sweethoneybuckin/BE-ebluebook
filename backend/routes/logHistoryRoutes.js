import express from 'express';
import {
  getAllLogHistories,
  getLogHistoryById,
  createLogHistory,
  updateLogHistory,
  deleteLogHistory
} from '../controllers/logHistoryController.js';

const router = express.Router();

router.get('/', getAllLogHistories);
router.get('/:id', getLogHistoryById);
router.post('/', createLogHistory);
router.put('/:id', updateLogHistory);
router.delete('/:id', deleteLogHistory);

export default router;