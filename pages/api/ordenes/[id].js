import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {

  const prisma = new PrismaClient()

  if (req.method === 'POST') {
    const { id } = req.query

    const ordenActualizada = await prisma.orden.update({
      where: {
        id: parseInt(id)
      },
      data: {
        estado: true
      }
    })
    res.status(200).json(ordenActualizada)
  }
}

// Primero identifica el objeto que quieres actualizar en prisma.orden.update con el where id.
// Luego le dices que es lo que quieres actualizar (en este caso, el estado a true).