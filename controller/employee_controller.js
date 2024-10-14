import EmployeeAvailability from '../models/employee_availability_model.js';

class EmployeeController {
  async getAllEmployees(req, res) {
    try {
      const employees = await EmployeeAvailability.findAll(
        {
            where:{
                is_available: true
            }
        }
      );
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
