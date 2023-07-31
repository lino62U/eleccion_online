This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Estilos de programación aplicados:
- Uso de camelCase:(Page/Votacion.js)

  const [partidos, setPartidos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [success, setSuccess] = useState(false);
  
- Manejo de Errores : (Data/Repositorio/PartidosPoliticos.js)
  static async getPartidos() {
    try {
      const response = await axios.get('/api/services/partido_politico');
      return response;
    } catch (error) {
      console.error('Error al obtener resultados de la base de datos:', error);
      throw error;
    }
  }
- Linea de codigo menor que 80 caracteres (Page/Votacion.js)
   <Success show={isSuccess} handleClose={logout} isSuccess={success} />
  <Verify
    isOpen={isOpen}
    onRequestClose={() => setIsOpen(false)}
    onConfirm={handleSubmit}
    text={"Estas seguro de tu voto?"}
  />
