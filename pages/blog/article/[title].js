import { useRouter } from "next/router"
import Header from "../../../components/layout/header";

export default function Article() {
    const router = useRouter();
    console.log(router)
    return(
        <>
            <Header />
            <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
                <div className="text-center">
                    <h1 className="text-3xl text-gray-800 font-semibold">
                        {router.query.title}
                    </h1>
                    <p className="mt-3 text-gray-500">
                       {router.query.text}
                    </p>
                </div>
            </section>
        </>
    )
}