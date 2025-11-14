import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Currency = sequelize.define('Currency', {
  currencyid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'currency',
  timestamps: true
});

export default Currency;