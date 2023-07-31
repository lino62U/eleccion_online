import axios from 'axios';

class PartidoPolitico {
  // Obtiene todos los partidos políticos desde el backend
  static async getPartidos() {
    try {
      const response = await axios.get('/api/services/partido_politico');
      return response;
    } catch (error) {
      console.error('Error al obtener resultados de la base de datos:', error);
      throw error;
    }
  }

  // Otras operaciones de acceso a la base de datos utilizando Axios
}

export default PartidoPolitico;
