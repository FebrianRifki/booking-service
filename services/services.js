import dbConfig from '../db/db_connection.js'; 
import { Session } from '../model/session_model.js';

class Service {
    constructor(){
        this.connection = dbConfig;
    }

    async getSessionTime() {
        return new Promise(async (resolve, reject) => {
          try {
            const sessionData = await Session.findAll(); 
            resolve(sessionData); 
          } catch (error) {
            reject(error); 
          }
        });
      }
      
}

export default Service;