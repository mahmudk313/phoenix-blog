export default function FilterForm() {
    return(
        <div className="flex flex-row mb-1 sm:mb-0 w-full mr-2">
            <div className="text-end">
                <form className="flex flex-col items-center md:flex-row w-3/4 md:w-full max-w-sm md:space-x-2 space-y-3 md:space-y-0 justify-center h-9">
                    <div className=" relative ">
                        <input type="text" id="&quot;form-subscribe-Filter" className="h-9 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="name"/>
                    </div>
                    <button className="flex-shrink-0 px-4 py-2 items-center shadow-sm text-sm border-transparent font-medium text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500" type="submit">
                        Filter
                    </button>
                </form>
            </div>
        </div>
    )
}