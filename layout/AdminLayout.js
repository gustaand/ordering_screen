import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({ children, pagina }) {

  const router = useRouter()

  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Quiosco Cafetería" />
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
          <Image
            className="box-border p-5 m-auto"
            width={300}
            height={100}
            src="/assets/img/logo.svg"
            alt="imagen logotipo"
          />

          <button
            className="border p-2 text-sm m-auto block rounded-sm hover:bg-slate-50"
            onClick={() => router.push("/")}
          >
            Pantalla de Pedidos
          </button>

        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">
            {children}
          </div>
        </main>
      </div>
      <ToastContainer />
    </>
  );
}