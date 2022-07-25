import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "./../../../../src/store/slices/usersSlice"
//Const Values
import country from "../../country";
import userRoles from "./../../userRoles";
import statuses from "../../statuses";
//Components
import ModalFormField from "./modalFormField";
import ModalFormBtns from "./modalFormBtns";
import ModalFormImageChange from "./modalFormImageChange";

export default function ModalForm({ closeModal, userId, editMode }) {
    const [user, setUser] = useState({})
    const dispatch = useDispatch();

    if(editMode) {
        const editUser = useSelector((state) => state.users.list).filter(user => user.id === userId)
        useEffect(() => {
            setUser(...editUser)
        },[])
    }
    
    const fields = [
        {text:"First name", htmlFor:"firstName", type:"text", name:"firstName", id:"firstName", autoComplete: "given-name", defaultValue: user?.firstName },
        {text:"Last name", htmlFor:"lastName", type:"text", name:"lastName", id:"lastName", autoComplete: "family-name", defaultValue: user?.lastName},
        {text:"Country", htmlFor:"country", name:"country", id:"country", autoComplete: "country-name", select: true, selectOptions: country, defaultValue: user?.country},
        {text:"Email address", htmlFor:"emailAddress", type:"email", name:"emailAddress", id:"emailAddress", autoComplete: "email", defaultValue: user?.emailAddress },
        {text:"Role", htmlFor:"role", name:"role", id:"role", autoComplete: "role", select: true, selectOptions: userRoles, defaultValue: user?.role},
        {text:"Status", htmlFor:"status", name:"status", id:"status", autoComplete: "status", select: true, selectOptions: statuses, defaultValue: user?.status },
        {text:"Password", htmlFor:"password", type:"password", name:"password", id:"password"},
        {text:"Confirm Password", htmlFor:"confirmPassword", type:"password", name:"confirmPassword", id:"confirmPassword"},
    ]

    let inputChangeHandler = e => {
        let [inputName, inputValue] = [e.target.name, e.target.value]
        setUser(prevState => {
            return {
                ...prevState,
                [inputName]: inputValue,
            }
        })
    }

    let addUserHandler = (e) => {
        e.preventDefault();
        user.id = Date.now();
        user.createDate = new Date().toLocaleDateString();
        dispatch(addUser({user}))
        closeModal();
    }

    let editUserHandler = (e) => {
        e.preventDefault();
        dispatch(updateUser({user}))
        closeModal();
    }

    return(
        <div className="mt-5 md:mt-0">
            <form onSubmit={ editMode ? editUserHandler : addUserHandler }>
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <ModalFormImageChange />
                        <div className="grid grid-cols-6 gap-6">
                            {
                                fields.map((field) => <ModalFormField key={field.id} inputChangeHandler={inputChangeHandler} {...field} />)
                            }
                        </div>
                    </div>
                    <ModalFormBtns closeModal={closeModal} />
                </div>
            </form>
        </div>
    )
}