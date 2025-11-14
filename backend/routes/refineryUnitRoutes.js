import express from 'express';
import {
  getAllRefineryUnits,
  getRefineryUnitById,
  createRefineryUnit,
  updateRefineryUnit,
  deleteRefineryUnit
} from '../controllers/refineryUnitController.js';

const router = express.Router();

router.get('/', getAllRefineryUnits);
router.get('/:id', getRefineryUnitById);
router.post('/', createRefineryUnit);
router.put('/:id', updateRefineryUnit);
router.delete('/:id', deleteRefineryUnit);

export default router;