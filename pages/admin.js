// MIRAR DOCUMENTACIÓN DE SWR!!!
import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from "@/layout/AdminLayout"
import Orden from '@/components/Orden'

export default function Admin() {

  // Hay que crear una función para el fetcher para hacer la consulta a la API
  const fetcher = () => axios('/api/ordenes').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api/ordenes', fetcher, { refreshInterval: 10 })

  return (
    <AdminLayout pagina={'Admin'}>
      <h1 className="text-4xl font-black">Panel de Administración</h1>
      <p className='text-2xl my-10'>Ordenes: </p>

      {data && data.length ?
        data.map(orden => (
          <Orden
            key={orden.id}
            orden={orden}
          />
        )) : <p>No hay ordenes pendientes</p>}
    </AdminLayout>
  )
}

// Estaremos utilizando un hook llamado useSWR: Un hook para Consultar APIs.
// Hace la busqueda en tiempo real Por cache. Usa el antiguo mientras revalida el nuevo y luego muestra el nuevo.
// (hecho por vercel, tienen la documentación en la página)
// El useSWR evita que tengas que pasar la petición a un useEffect. Ya lo hace todo