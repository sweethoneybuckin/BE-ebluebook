import express from 'express';
import {
  getAllBlueBooks,
  getBlueBookById,
  createBlueBook,
  updateBlueBook,
  deleteBlueBook
} from '../controllers/blueBookDBController.js';

const router = express.Router();

router.get('/', getAllBlueBooks);
router.get('/:id', getBlueBookById);
router.post('/', createBlueBook);
router.put('/:id', updateBlueBook);
router.delete('/:id', deleteBlueBook);

export default router;