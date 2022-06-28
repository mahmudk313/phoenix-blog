import Link from "next/link";
import country from "../../general/country";

import SignOutField from "./signOutField";

export default function SignOutForm() {
    const fields = [
        {text:"First name", htmlFor:"firstName", type:"text", name:"firstName", id:"firstName", autoComplete: "given-name"},
        {text:"Last name", htmlFor:"lsatName", type:"text", name:"lastName", id:"lastName", autoComplete: "family-name"},
        {text:"Email address", htmlFor:"emailAddress", type:"email", name:"emailAddress", id:"emailAddress", autoComplete: "email"},
        {text:"Country", htmlFor:"country", name:"country", id:"country", autoComplete: "country-name", select: true, selectOptions: country},
        {text:"Password", htmlFor:"password", type:"password", name:"password", id:"password"},
        {text:"Confirm Password", htmlFor:"confirmPassword", type:"password", name:"confirmPassword", id:"confirmPassword"},
    ]
    return(
        <div className="mt-5 md:mt-0">
            <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            {
                                fields.map(item=> <SignOutField key={item.id} {...item} />)
                            }
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <Link href="/">
                            <a>

                                <button
                                    type="submit"
                                    className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm text-sm font-medium rounded-md text-indigo-700 hover:text-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                >
                                    Cancel
                                </button>
                            </a>
                        </Link>
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}