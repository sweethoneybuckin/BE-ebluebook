import express from 'express';
import {
  getAllCurrencies,
  getCurrencyById,
  createCurrency,
  updateCurrency,
  deleteCurrency
} from '../controllers/currencyController.js';

const router = express.Router();

router.get('/', getAllCurrencies);
router.get('/:id', getCurrencyById);
router.post('/', createCurrency);
router.put('/:id', updateCurrency);
router.delete('/:id', deleteCurrency);

export default router;