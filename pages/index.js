import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/layout/Layout'
import useQuiosco from '@/hooks/useQuiosco'
import Producto from '@/components/Producto'

export default function Home() {

  const { categoriaActual } = useQuiosco()

  return (
    <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
      <h1 className='text-4xl font-black'>{categoriaActual?.nombre}</h1>
      <p className='text-2xl my-10'>
        Elige y persoaliza tu pedido a continuación
      </p>

      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {categoriaActual?.producto?.map(product => (
          <Producto
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </Layout>
  )
}












/*
Para filtrar la consulta:

const categorias = await prisma.categoria.findFirst({
  where: {
    nombre: "Pizzas"
  }
})

*/

/* 
  --- UTILIDADES ---

  React Modal
  React Toastify

*/