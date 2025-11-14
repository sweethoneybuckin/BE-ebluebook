import express from 'express';
import {
  getAllApprovals,
  getApprovalById,
  createApproval,
  updateApproval,
  deleteApproval
} from '../controllers/approvalController.js';

const router = express.Router();

router.get('/', getAllApprovals);
router.get('/:id', getApprovalById);
router.post('/', createApproval);
router.put('/:id', updateApproval);
router.delete('/:id', deleteApproval);

export default router;