import express from 'express';
import SessionController from '../controller/session_controller.js';
import EmployeeController from '../controller/employee_controller.js';

const router = express.Router();

router.get('/get-session', SessionController.getSessions);

router.get('/get-available-employees', EmployeeController.getAllEmployees);

export default router;