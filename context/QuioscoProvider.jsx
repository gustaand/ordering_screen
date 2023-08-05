import { useState, useEffect, createContext } from "react";
import axios from "axios";
// La función toast nos permite llamar el toast en los eventos
import { toast } from 'react-toastify'
import { useRouter } from "next/router";

//Crea  una variable que es igual a createContext para crear el context.
const QuioscoContext = createContext()


const QuioscoProvider = ({ children }) => {

  const [categorias, setCategorias] = useState([])
  const [categoriaActual, setCategoriaActual] = useState({})
  const [producto, setProducto] = useState({})
  const [modal, setModal] = useState(false)
  const [pedido, setPedido] = useState([])
  const [nombre, setNombre] = useState('')
  const [total, setTotal] = useState(0)

  const router = useRouter()

  //Usaremos la libreria axios para tomar los datos
  const obtenerCategorias = async () => {
    const { data } = await axios('/api/categorias')
    setCategorias(data)
  }


  // ---- useEffects ----
  useEffect(() => {
    obtenerCategorias()
  }, [])

  //Valor de categoriaActual por defecto al iniciar.
  useEffect(() => {
    setCategoriaActual(categorias[0])
  }, [categorias])

  useEffect(() => {
    //le calculamos en un reduce. reduce es un acumulador que toma dos parametros
    const nuevoTotal = pedido.reduce((total, producto) =>
      (producto.precio * producto.cantidad) + total, 0
    )

    setTotal(nuevoTotal)
  }, [pedido])

  // ---- Funciones ----
  const handleClickCategoria = id => {
    const categoria = categorias.filter(cat => cat.id === id)
    // Al ser un array method nos devuelve un array, entonces accedemos a [0] para acceder al objeto
    setCategoriaActual(categoria[0])
    router.push('/')
  }

  const handleSetProducto = producto => {
    setProducto(producto)
  }

  const handleChangeModal = () => {
    setModal(!modal)
  }

  //Sacamos categoriaId (y imagen), y desestruturamos el producto. 
  const handleAgregarPedido = ({ categoriaId, ...producto }) => {

    // ------ HACER LA ACTUALIZACIÓN DESPUES EN LA PANTALLA DE RESUMEN DE PEDIDO -------
    //El metodo some sirve para iterar los elementos del array y retorna true o false si un elemento cumple con la condición.
    if (pedido.some(productoState => productoState.id === producto.id)) {
      //El producto ya existe. Actualizar la cantidad.

      const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
      setPedido(pedidoActualizado)

      toast.success('Guardado Correctamente')

    } else {
      //El producto no extiste
      setPedido([...pedido, producto])
      toast.success('Agregado al Pedido')
    }

    setModal(false)

    // ---- DESCOMENTAR PARA HACER LA PANTALLA DE RESUMEN DE PEDIDO ---
    // //tomamos una cópia de pedido por que es un arreglo, y agregamos el producto al final
    // setPedido([...pedido, producto])
    // setModal(false)
    //toast.success('Agregado al Pedido')
  }

  // Para editar cantidades del pedido en el menú de resumen. Ya que el modal usa el estado de producto
  // Actualizamos el ID para el id del pedido que estamos pasando.
  const handleEditarCantidades = id => {
    const productoActualizar = pedido.filter(producto => producto.id === id)
    //otra vez al ser un array method nos va retornar un array
    setProducto(productoActualizar[0])

    setModal(!modal)
  }

  const handleEliminarProducto = id => {
    const pedidoActualizado = pedido.filter(producto => producto.id !== id)
    setPedido(pedidoActualizado)
  }


  //Va interactuar con la base de datos
  const colocarOrden = async (e) => {
    e.preventDefault()

    try {
      //En caso de axios tenemos el { data } para acceder a los datos. en el "fetch" no.
      //El segundo argumento que soporta el post son los datos, que les pasamos como objetos. 
      //Tiene que corresponder con el schema de prisma.
      await axios.post('/api/ordenes', { pedido, nombre, total, fecha: Date.now().toString() })

      // Resetear la App
      setCategoriaActual(categorias[0])
      setPedido([])
      setNombre('')
      setTotal(0)

      toast.success('Pedido Realizado Correctamente')

      setTimeout(() => {
        router.push('/')
      }, 3000)

    } catch (error) {
      console.log(error)
    }
  }

  return (

    // QuioscoContext.Provider recibe un prop de value para pasar los estados
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        producto,
        handleSetProducto,
        modal,
        handleChangeModal,
        handleAgregarPedido,
        pedido,
        handleEditarCantidades,
        handleEliminarProducto,
        nombre,
        setNombre,
        colocarOrden,
        total
      }}
    >
      {children}
    </QuioscoContext.Provider>
  )
}

export {
  QuioscoProvider
}

export default QuioscoContext