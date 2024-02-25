import sql from "mssql";

// Configuración de la conexión a la base de datos
const config = {
  user: "BRAULIO",
  password: "",
  server: "localhost",
  database: "ECOMMERCE",
  options: {
    encrypt: true, // Si estás utilizando una conexión segura (SSL/TLS)
    trustServerCertificate: false, // Si estás utilizando una conexión segura (SSL/TLS)
  },
};

// Función para conectar a la base de datos
async function conectarBaseDeDatos() {
  try {
    await sql.connect(config);
    console.log("Conectado a la base de datos SQL Server");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}

// Exporta la función para que pueda ser utilizada desde otros módulos
export { conectarBaseDeDatos };
