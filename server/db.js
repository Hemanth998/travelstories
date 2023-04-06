const { Client } = require('pg');

require('dotenv').config();

const client = new Client();

const connectDB = async () => {
  //client or pool - go with client
  // clients will also use environment variables
  // for connection information

  try {
    await client.connect();
    //const res = await client.query('SELECT NOW()');
    console.log('Database connected');
    //await client.end();
  } catch (error) {
    throw error;
  }
};

module.exports = {
  connectDB,
  client,
};
