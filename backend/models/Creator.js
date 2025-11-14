import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Creator = sequelize.define('Creator', {
  creatornopeg: {
    type: DataTypes.CHAR(15),
    primaryKey: true,
    allowNull: false
  },
  creatorname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  creatoremail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  creatorpassword: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'creator',
  timestamps: true
});

export default Creator;