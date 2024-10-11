import express from 'express';
import Service  from '../services/services.js'; 

const service = new Service(); 

const router = express.Router();

router.get('/get-session', async (req, res) => {
    try {
        // Tunggu data dari service.getSessionTime()
        const sessionData = await service.getSessionTime();
        
        // Jika data ditemukan, kirim respons sukses
        if (sessionData) {
            res.status(200).json({
                status: 'success',
                message: 'Data retrieved successfully',
                statusCode: 200,
                data: sessionData,
            });
        } else {
            // Jika tidak ada data yang ditemukan
            res.status(404).json({
                status: 'failed',
                message: 'No data found',
                statusCode: 404,
                data: {},
            });
        }
    } catch (error) {
        // Jika terjadi error, kirim respons gagal
        res.status(500).json({
            status: 'failed',
            message: 'Something went wrong',
            statusCode: 500,
            error: error.message,
        });
    }
});

router.post('/services', (req, res) => {
    // Logic untuk menambah layanan baru
    res.send('Layanan baru ditambahkan');
});

export default router;