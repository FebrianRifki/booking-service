import Services from '../services/services.js';
import moment from 'moment';


class EmployeeController {
  async getAllEmployees(req, res) {
    try {
    //   var date = req.body.date;
    //   const formattedDate = moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD HH:mm:ss');
      const date = moment('2024-10-15').format('YYYY-MM-DD');  
      const employees = await Services.getAvailableEmployees(date);
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving employees', error });
    }
  }

  async createEmployee(req, res) {
    try {
      const { name, email, phone, position } = req.body;
      const newEmployee = await Employee.create({ name, email, phone, position });
      res.status(201).json(newEmployee);
    } catch (error) {
      res.status(500).json({ message: 'Error creating employee', error });
    }
  }
}

export default new EmployeeController();
