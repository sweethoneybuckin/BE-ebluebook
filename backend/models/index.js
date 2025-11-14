import sequelize from '../config/database.js';
import Creator from './Creator.js';
import Administrator from './Administrator.js';
import Approval from './Approval.js';
import RefineryUnit from './RefineryUnit.js';
import Dashboard from './Dashboard.js';
import Currency from './Currency.js';
import Plant from './Plant.js';
import Classification from './Classification.js';
import Category from './Category.js';
import BrandList from './BrandList.js';
import BlueBookDB from './BlueBookDB.js';
import LogHistory from './LogHistory.js';

// Export all models
const models = {
  Creator,
  Administrator,
  Approval,
  RefineryUnit,
  Dashboard,
  Currency,
  Plant,
  Classification,
  Category,
  BrandList,
  BlueBookDB,
  LogHistory,
  sequelize
};

export default models;