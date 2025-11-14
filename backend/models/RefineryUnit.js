import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const RefineryUnit = sequelize.define('RefineryUnit', {
  refineryunitid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  refineryunitname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  refineryunitlocation: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'refineryunit',
  timestamps: true
});

export default RefineryUnit;