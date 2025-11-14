import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const BrandList = sequelize.define('BrandList', {
  brandlistid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  brand_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  product: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true
  },
  MSDS: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Path to PDF file stored locally'
  },
  information: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'brandlist',
  timestamps: true
});

export default BrandList;