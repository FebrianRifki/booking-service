
import Service  from '../services/services.js'; 

class SessionController {
  async getSessions(req, res) {
    try {
 
        const sessionData = await Service.getSessionTime();
        

        if (sessionData) {
            res.status(200).json({
                status: 'success',
                message: 'Data retrieved successfully',
                statusCode: 200,
                data: sessionData,
            });
        } else {

            res.status(404).json({
                status: 'failed',
                message: 'No data found',
                statusCode: 404,
                data: {},
            });
        }
    } catch (error) {

        res.status(500).json({
            status: 'failed',
            message: 'Something went wrong',
            statusCode: 500,
            error: error.message,
        });
    }
  }
}

// Ekspor instance dari EmployeeController
export default new SessionController();

// async (req, res) => {
    
// }