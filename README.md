This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Trabajo encargado:
```bash
- pages/votacion.js
- pages/api/services/voto.js
- pages/api/services/partido_politico.js
- Data/Repositorio/PartidosPoliticos.js
- Data/Repositorio/SendVoto.js
```
## Estilos de programacion
```
-
-Funciones: use funciones de flecha a menos que tenga una razón específica para usar funciones regulares, como en métodos de objetos o constructores, debido a cómo funciona esto. Declararlos como const, y usar retornos implícitos si es posible.

-
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
//-Comentarios (page/api/services/PartidoPolitico.js

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
//- Destructuracion in next.js (pages/api/services)
/*La desestructuración de accesorios y estados hace que el código sea más conciso y legible. En lugar de escribir "props.title", puedes escribir "const {title} = props".*/
const { id_elector, id_partido, fecha } = req.body;
