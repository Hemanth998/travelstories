const { Client } = require('pg');

const connectDB = async () => {
  //client or pool - go with client
  // clients will also use environment variables
  // for connection information

  try {
    const client = new Client();
    await client.connect();
    //const res = await client.query('SELECT NOW()');
    console.log('Database connected');
    await client.end();
  } catch (error) {
    throw error;
  }
};

module.exports = connectDB;
