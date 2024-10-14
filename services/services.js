import dbConfig from '../db/db_connection.js'; 
import { Session } from '../models/session_model.js';
import  EmployeeAvailability  from '../models/employee_availability_model.js'; 
import { where } from 'sequelize';

class Service {
    constructor(){
        this.connection = dbConfig;
    }

    async getSessionTime() {
        try {
            const sessionData = await Session.findAll();
            return sessionData; // Secara otomatis mengembalikan Promise yang sudah diselesaikan
        } catch (error) {
            throw error; // Mengabaikan kesalahan yang mungkin terjadi
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

      async getAvailableEmployees() {
        try {
          const result = await EmployeeAvailability.findAll({
            where: {
              is_available: true,
            },
          });
      
          if (result.length > 0) {
            return result; 
          } else {
            return [];
          }
        } catch (error) {
          console.error('Error fetching available employees:', error);
          throw error;
        }
      }
      
}

export default new Service();