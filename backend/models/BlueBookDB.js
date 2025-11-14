import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import BrandList from './BrandList.js';

const BlueBookDB = sequelize.define('BlueBookDB', {
  bluebookdbid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  material_number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  material_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  brand: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: BrandList,
      key: 'brandlistid'
    }
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  MSDS: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'Path to PDF file stored locally'
  },
  classification: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  utility: {
    type: DataTypes.STRING,
    allowNull: false
  },
  minimum_stock: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ru: {
    type: DataTypes.STRING,
    allowNull: false
  },
  unit: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'bluebookdb',
  timestamps: true
});

// Define relationship
BlueBookDB.belongsTo(BrandList, {
  foreignKey: 'brand',
  targetKey: 'brandlistid'
});

BrandList.hasMany(BlueBookDB, {
  foreignKey: 'brand',
  sourceKey: 'brandlistid'
});

export default BlueBookDB;