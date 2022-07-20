import Link from "next/link";

export default function ModalFormBtns({closeModal}) {
    return(
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            {/* <Link href="/">
                <a> */}
                    <button
                        type="button"
                        className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm text-sm font-medium rounded-md text-indigo-700 hover:text-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                {/* </a>
            </Link> */}
            <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Submit
            </button>
        </div>
    )
}