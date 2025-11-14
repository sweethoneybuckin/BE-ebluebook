import express from 'express';
import {
  getAllAdministrators,
  getAdministratorById,
  createAdministrator,
  updateAdministrator,
  deleteAdministrator
} from '../controllers/administratorController.js';

const router = express.Router();

router.get('/', getAllAdministrators);
router.get('/:id', getAdministratorById);
router.post('/', createAdministrator);
router.put('/:id', updateAdministrator);
router.delete('/:id', deleteAdministrator);

export default router;