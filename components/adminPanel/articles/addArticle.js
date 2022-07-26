import { useState, Suspense, lazy } from "react"

//Components
import List from "../../general/listsShow"
const Modal = lazy(()=> import(/* webpackChunkName: "modal-component" */"../../general/modal"))

export default function AddArticle() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

    return(
        <>
            <List.Button 
                onClick={openModal}
                type="button"
                className="rounded-md shadow-sm bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
                Add
            </List.Button>
            
            <Suspense>
                { isOpen && <Modal closeModal={closeModal} /> }
            </Suspense>
        </>
    )
}