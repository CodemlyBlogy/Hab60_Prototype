import Header from "@/components/Header"
import Title from "@/components/Tilte"
import Link from "next/link"


const SuccessfullySent = () => {
  return (
    <div>
        <Header/>
        <section className=" items-center  h-screen flex  flex-col object-center  w-1/2 m-auto text-center content-center align-middle justify-center">
            <article className=" bg-slate-100 p-12"> 

            <h2>
                Uploaded Successfully
            </h2>
            <article>
                <button>
                    <Link href="/">
                        Dashboard
                    </Link>
                </button>
                <button>
                    <Link href="/">
                        View Property
                    </Link>
                </button>
            </article>
            </article>

        </section>
    </div>
  )
}
export default SuccessfullySent