import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Category = sequelize.define('Category', {
  categoryid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'category',
  timestamps: true
});

export default Category;