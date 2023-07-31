import axios from 'axios';

class SendVoto {
  // Enviar el voto al backend
  static async Sufragar(voto) {
    try {
      const response = await axios.post('/api/services/voto', voto);
      return response;
    } catch (error) {
      console.error('Error al enviar el voto:', error);
      throw error;
    }
  }
}

export default SendVoto;
