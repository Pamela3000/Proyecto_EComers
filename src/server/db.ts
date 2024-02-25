import * as sql from 'mssql';

// Configuración de la conexión a la base de datos
const config: sql.config = {
  user: 'tu_usuario',
  password: 'tu_contraseña',
  server: 'localhost',
  database: 'tu_base_de_datos',
  options: {
    encrypt: true, // Si estás utilizando una conexión segura (SSL/TLS)
  },
};

// Función para conectar a la base de datos
async function conectarBaseDeDatos(): Promise<void> {
  try {
    await sql.connect(config);
    console.log('Conectado a la base de datos SQL Server');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

// Exporta la función para que pueda ser utilizada desde otros módulos
export { conectarBaseDeDatos };
