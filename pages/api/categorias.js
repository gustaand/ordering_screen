import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const categoria = await prisma.categoria.findMany({
    include: {
      producto: true
    }
  })
  res.status(200).json(categoria)
}



// export default async function handler(req, res) {
//   const prisma = new PrismaClient()
//   const categoria = await prisma.categoria.findMany({
//     //include sirve para incluir los datos relacionados con otros
//     include: {
//       productos: true,
//     }
//   })

//   res.status(200).json(categoria)
// }


/* Una opción es crear una petición para productos y crear un endpoint para cada producto dentro de la petición, lo que
  le hace las queries un poco más eficientes.

  La mejor opción para un proyectos simples es incluir los campos relacionados (eager loading).
*/

