import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Plant = sequelize.define('Plant', {
  plantid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  plantcode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'plant',
  timestamps: true
});

export default Plant;