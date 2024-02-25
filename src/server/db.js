// filename: index.js
const rest = new (require('rest-mssql-nodejs'))({
  user: 'braul',
  password: '',
  server: 'BRAULIO\MSSQLSERVER2', // replace this with your IP Server
  database: 'ECOMMERCE',
  port: 1433, // this is optional, by default takes the port 1433
  options: { 
      encrypt: false // this is optional, by default is false
  } 
});

module.exports = {
  rest
}