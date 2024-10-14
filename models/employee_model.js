import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/db_connection.js'; // Sesuaikan dengan koneksi database Anda

class Employee extends Model {}

Employee.init(
  {
    employee_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    position: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize, 
    modelName: 'Employee',
    tableName: 'employee',
    timestamps: false, 
  }
);

export default Employee;