import RestMSSQLNodeJS from "rest-mssql-nodejs";

const rest = new RestMSSQLNodeJS({
  user: "braulio",
  password: "",
  server: "BRAULIO\\MSSQLSERVER2",
  database: "ECOMMERCE",

  port: 1433, // this is optional, by default takes the port 1433}
  options: {
    trustedConnection: true,
    enableArithAbort: true,
    encrypt: false,
  },
});
setTimeout(async () => {
  const result = await rest.executeQuery("SELECT * FROM Usuarios");
  console.log(result);
}, 1000);
