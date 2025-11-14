import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Dashboard = sequelize.define('Dashboard', {
  dashboardid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'dashboard',
  timestamps: true
});

export default Dashboard;