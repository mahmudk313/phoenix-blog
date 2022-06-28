import country from "../../general/country";
//Components
import SignUpField from "./signUpField";
import SignUpBtns from "./signUpBtns";

export default function SignUpForm() {
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
                                fields.map(item=> <SignUpField key={item.id} {...item} />)
                            }
                        </div>
                    </div>
                    <SignUpBtns />
                </div>
            </form>
        </div>
    )
}