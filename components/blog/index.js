import Cards from "./cards"

export default function Articles() {

  return(
    <>

      <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
          <div className="text-center">
              <h1 className="text-3xl text-gray-800 font-semibold">
                  Blog
              </h1>
              {/* <p className="mt-3 text-gray-500">
                  Blogs that are loved by the community. Updated every hour.
              </p> */}
          </div>
          <Cards />
      </section>

    </>
  )
}
