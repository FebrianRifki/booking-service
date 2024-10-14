import dbConfig from '../db/db_connection.js'; 
import { Session } from '../models/session_model.js';
import  EmployeeAvailability  from '../models/employee_availability_model.js'; 
import { where, QueryTypes } from 'sequelize';

class Service {
    constructor(){
        this.connection = dbConfig;
    }

    async getSessionTime() {
        try {
            const sessionData = await Session.findAll();
            return sessionData;
        } catch (error) {
            throw error; 
        }
    }

      // async updateEmployeeAvailability(employeeId, newAvailableStatus, date) {
      //   try {
      //     const note = newAvailableStatus ? 'Available' : 'On Duty'; 
      //     const result = await EmployeeAvailability.update(
      //       { is_available: newAvailableStatus, note: note }, 
      //       {
      //         where: {
      //           employee_id: employeeId
      //         }
      //       }
      //     );
      
      //     return result[0] > 0;
      //   } catch (error) {
      //     console.error('Error updating employee availability:', error);
      //     throw error;
      //   }
      // }

      async getAvailableEmployees(date) {
        try {
            const query = `
                SELECT availability_id, employee_id, date, is_available, note
                FROM employee_availability
                WHERE is_available = true
                and date = :date`;

            const availableEmployees = await this.connection.query(query, {
                replacements: { date: date }, // Menggunakan replacements untuk mengganti parameter
                type: QueryTypes.SELECT
            });

            return availableEmployees.length > 0 ? availableEmployees : [];
        } catch (error) {
            console.error('Error fetching available employees:', error);
            throw error;
        }
    }
      
}

export default new Service();