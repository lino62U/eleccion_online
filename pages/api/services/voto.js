import { pool } from "@/ldavis/Data/config/db";

export default async function handleVoto(req, res) {
  // Desestructurar los valores recibidos desde el cuerpo de la solicitud
  const { id_elector, id_partido, fecha } = req.body;
  
  try {
    // Buscar si el usuario ya ha votado previamente
    const [find] = await pool.query("SELECT * FROM votos WHERE id_elector = ?", [id_elector]);
    
    // Si se encuentra algún voto registrado, devolver un mensaje de error
    if (find.length > 0) {
      return res.status(401).json({ message: "Usuario ya votó" });
    }
    
    // Insertar el voto en la base de datos
    const resp = await pool.query("INSERT INTO votos VALUES (?, ?, ?);", [id_elector, id_partido, fecha]);
    // Devolver una respuesta con un código de estado 200 y el resultado de la inserción
    return res.status(200).json(resp);
  } catch (error) {
    // Si ocurre un error en la consulta a la base de datos, se captura aquí
    console.error("Error al insertar el voto en la base de datos:", error);
    // Devolver una respuesta con un código de estado 500 y un mensaje de error genérico para el cliente
    res.status(500).json({ error: "Error en el servidor" });
  }
}
