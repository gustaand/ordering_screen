import Image from "next/image"
import useQuiosco from "@/hooks/useQuiosco"
import Categoria from "./Categoria"
import { useRouter } from "next/router"

export default function Sidebar() {

  const { categorias } = useQuiosco()
  const router = useRouter()

  return (
    <>
      <Image
        className="box-border p-5 m-auto"
        width={300}
        height={100}
        src="/assets/img/logo.svg"
        alt="Imagen logotipo"
      />

      <button
        className="border p-2 text-sm m-auto block rounded-sm hover:bg-slate-50"
        onClick={() => router.push("/admin")}
      >
        Administración de Pedidos
      </button>

      <nav className="mt-10">
        {categorias.map(categoria => (
          <Categoria
            key={categoria.id}
            categoria={categoria}
          />
        ))}
      </nav>
    </>
  )
}
