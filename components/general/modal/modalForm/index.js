import country from "../../country";
import userRoles from "./../../userRoles";
import statuses from "../../statuses";
//Components
import ModalFormField from "./modalFormField";
import ModalFormBtns from "./modalFormBtns";
import ModalFormImageChange from "./modalFormImageChange";

export default function ModalForm({closeModal}) {
    const fields = [
        {text:"First name", htmlFor:"firstName", type:"text", name:"firstName", id:"firstName", autoComplete: "given-name"},
        {text:"Last name", htmlFor:"lastName", type:"text", name:"lastName", id:"lastName", autoComplete: "family-name"},
        {text:"Country", htmlFor:"country", name:"country", id:"country", autoComplete: "country-name", select: true, selectOptions: country},
        {text:"Email address", htmlFor:"emailAddress", type:"email", name:"emailAddress", id:"emailAddress", autoComplete: "email"},
        {text:"Role", htmlFor:"role", name:"role", id:"role", autoComplete: "role", select: true, selectOptions: userRoles},
        {text:"Status", htmlFor:"status", name:"status", id:"status", autoComplete: "status", select: true, selectOptions: statuses},
        {text:"Password", htmlFor:"password", type:"password", name:"password", id:"password"},
        {text:"Confirm Password", htmlFor:"confirmPassword", type:"password", name:"confirmPassword", id:"confirmPassword"},
    ]
    return(
        <div className="mt-5 md:mt-0">
            <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <ModalFormImageChange />
                        <div className="grid grid-cols-6 gap-6">
                            {
                                fields.map(field=> <ModalFormField key={field.id} {...field} />)
                            }
                        </div>
                    </div>
                    <ModalFormBtns closeModal={closeModal} />
                </div>
            </form>
        </div>
    )
}