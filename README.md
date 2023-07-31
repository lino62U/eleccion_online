This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Trabajo encargado:
```bash
- pages/votacion.js
- pages/api/services/voto.js
- pages/api/services/partido_politico.js
- Data/Repositorio/PartidosPoliticos.js
- Data/Repositorio/SendVoto.js
```
## Convenciones de programación aplicados:
```javascript
//- Uso de camelCase:(Page/Votacion.js)

  const [partidos, setPartidos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [success, setSuccess] = useState(false);
  
//- Manejo de Errores : (Data/Repositorio/PartidosPoliticos.js)
  static async getPartidos() {
    try {
      const response = await axios.get('/api/services/partido_politico');
      return response;
    } catch (error) {
      console.error('Error al obtener resultados de la base de datos:', error);
      throw error;
    }
  }
//- Linea de codigo menor que 80 caracteres (Page/Votacion.js)
    <Success show={isSuccess} handleClose={logout} isSuccess={success} />
    <Verify
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      onConfirm={handleSubmit}
      text={"Estas seguro de tu voto?"}
    />
//-Comentarios
//-Creacion de clases
