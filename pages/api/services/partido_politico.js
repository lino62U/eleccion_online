import { pool } from "@/ldavis/Data/config/db";

export default async function handlePartidoPolitico(req, res) {
  try {
    // Realiza una consulta a la base de datos para obtener los datos de partido_politico
    const [result] = await pool.query("SELECT * FROM partido_politico;");
    // Devuelve la respuesta con el resultado de la consulta como un objeto JSON
    return res.status(200).json(result);
  } catch (error) {
    // Si ocurre un error en la consulta a la base de datos, se captura aquí
    console.error("Error al obtener los datos de partido_politico:", error);
    // Devuelve una respuesta con un código de estado 500 y un mensaje de error genérico para el cliente
    res.status(500).json({ error: "Error en el servidor" });
  }
}
