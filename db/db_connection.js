import { Sequelize } from 'sequelize'; 

const sequelize = new Sequelize('booking-test', 'root', '', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql', 
  logging: true
});

const testConnection = async () => {
try {
    await sequelize.authenticate();
    console.log("Connected to the database!");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}
};

testConnection();

export default sequelize;