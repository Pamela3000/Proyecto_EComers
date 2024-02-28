export interface Pais {
  nombre: string;
  codigo: string;
}

export interface Idioma {
  nombre: string;
  codigo: string;
}

// Datos de ejemplo para países e idiomas
export const paises: Pais[] = [
  { nombre: "Estados Unidos", codigo: "us" },
  { nombre: "México", codigo: "mx" },
  { nombre: "Canadá", codigo: "ca" },
  { nombre: "Brasil", codigo: "br" },
  { nombre: "Alemania", codigo: "de" },
  { nombre: "Japón", codigo: "jp" },
  { nombre: "Australia", codigo: "au" },
  // ... más países
];

export const idiomas: Idioma[] = [
  { nombre: "Español", codigo: "es" },
  { nombre: "Inglés", codigo: "en" },
  { nombre: "Francés", codigo: "fr" },
  { nombre: "Italiano", codigo: "it" },
  { nombre: "Portugués", codigo: "pt" },
  { nombre: "Chino", codigo: "zh" },
  { nombre: "Ruso", codigo: "ru" },
  { nombre: "Árabe", codigo: "ar" },
  { nombre: "Hindi", codigo: "hi" },
  { nombre: "Bengalí", codigo: "bn" },
  { nombre: "Alemán", codigo: "de" },
  { nombre: "Japonés", codigo: "ja" },
  // ... más idiomas
];
