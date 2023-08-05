import { useRouter } from "next/router";

// Array de rutas, para redirecionar dinamicamente con useRouter de next
const pasos = [
  { paso: 1, nombre: 'Menú', url: '/' },
  { paso: 2, nombre: 'Resumen', url: '/resumen' },
  { paso: 3, nombre: 'Datos y Total', url: '/total' }
];

const Pasos = () => {

  const router = useRouter()

  //Función para hacer la barra de progreso.
  //Nos apoyamos en el lado del servidor y filtramos por la url el progreso que estamos. (hacerlo con State se pierde al cargar)
  const calcularProgreso = () => {
    let valor
    if (router.pathname === "/") {
      valor = 5
    } else if (router.pathname === "/resumen") {
      valor = 50
    } else {
      valor = 100
    }
    return valor;
  }

  return (
    <>
      <div className="flex justify-between mb-5">
        {pasos.map(paso => (
          <button
            onClick={() => router.push(paso.url)}
            className="text-2xl font-bold"
            key={paso.paso}>
            {paso.nombre}
          </button>
        ))}
      </div>

      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
          style={{ width: `${calcularProgreso()}%` }}
        ></div>
      </div>
    </>
  )
}

export default Pasos