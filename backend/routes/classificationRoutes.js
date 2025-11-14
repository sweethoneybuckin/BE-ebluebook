import express from 'express';
import {
  getAllClassifications,
  getClassificationById,
  createClassification,
  updateClassification,
  deleteClassification
} from '../controllers/classificationController.js';

const router = express.Router();

router.get('/', getAllClassifications);
router.get('/:id', getClassificationById);
router.post('/', createClassification);
router.put('/:id', updateClassification);
router.delete('/:id', deleteClassification);

export default router;