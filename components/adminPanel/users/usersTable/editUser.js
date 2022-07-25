import { lazy, useState, Suspense } from "react"

const Modal = lazy(() => import(/* webpackChunkName: "modal-component" */"../../../general/modal"))

export default function AddUser({ userId }) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

    return(
        <>
            <button onClick={openModal} className="text-indigo-600 hover:text-indigo-900">
                Edit
            </button>

            <Suspense>
                { isOpen && <Modal closeModal={closeModal} userId={userId} editMode /> }
            </Suspense>
        </>
    )
}