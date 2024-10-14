import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/db_connection.js'; 
import Employee from './employee_model.js'; 

class EmployeeAvailability extends Model {}

EmployeeAvailability.init(
  {
    availability_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Employee, 
        key: 'employee_id',
      },
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    is_available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    note: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize, 
    modelName: 'EmployeeAvailability',
    tableName: 'employee_availability',
    timestamps: false, 
  }
);

EmployeeAvailability.belongsTo(Employee, { foreignKey: 'employee_id' });
Employee.hasMany(EmployeeAvailability, { foreignKey: 'employee_id' });

export default EmployeeAvailability;