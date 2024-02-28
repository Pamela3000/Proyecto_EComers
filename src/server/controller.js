import RestMSSQLNodeJS from "rest-mssql-nodejs";

const rest = new RestMSSQLNodeJS({
  server: "BRAULIO\\MSSQLSERVER2",
  database: "ECOMMERCE",
  port: 1433,
  options: {
    trustedConnection: true,
    enableArithAbort: true,
    encrypt: true,
  },
});

async function fetchUsuarios() {
  try {
    const result = await rest.executeQuery("SELECT * FROM Usuarios");
    console.log(result);
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
  }
}

// Ejecuta la consulta sin el setTimeout a menos que sea necesario por alguna razón específica.
fetchUsuarios();
