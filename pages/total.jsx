import { useEffect, useCallback } from "react"
import Layout from "@/layout/Layout"
import useQuiosco from "@/hooks/useQuiosco"
import { formatearDinero } from "@/helpers"

export default function Total() {

  const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco()

  //Pasamos la función dentro de un useCallback y pedido como dependencia
  //para poder pasar el comprobarPedido en el useEffect
  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === ''
  }, [pedido, nombre])

  useEffect(() => {
    comprobarPedido()
  }, [pedido, comprobarPedido])


  return (
    <Layout pagina='Total y Confirmar Pedido'>
      <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
      <p className="text-2xl my-10">Confirma tu Pedido a Continuación</p>

      <form
        onSubmit={colocarOrden}
      >
        <div>
          <label htmlFor="nombre" className="block uppercase text-slate-800 font-bold text-xl">
            Nombre
          </label>

          {nombre.length === 0 &&
            <p>Por favor, escribe tu nombre!</p>
          }

          <input
            id="nombre"
            type="text"
            className="bg-gray-200 w-full mt-3 lg:w-1/3 p-2 rounded-md"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div className="mt-10">
          <p className="text-2xl">
            Total a Pagar: {''} <span className="font-bold">{formatearDinero(total)}</span>
          </p>
        </div>

        <div className="mt-5">
          <input
            type="submit"
            className={`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} 
              w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`
            }
            value='Confirmar Pedido'
            //Desabilitar el boton si no hay nada en el pedido.
            disabled={comprobarPedido()} //Podría simplemente pasar el disabled{pedido.length === 0 || nombre === ''}, pero vamos seguir el curso :X
          />
        </div>
      </form>
    </Layout>
  )
}
