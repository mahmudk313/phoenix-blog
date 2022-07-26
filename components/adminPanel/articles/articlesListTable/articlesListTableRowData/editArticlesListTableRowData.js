import { lazy, Suspense, useState } from "react"

//Components
import List from "../../../../general/listsShow"
const Modal = lazy(() => import(/* webpackChunkName: "modal-component" */"../../../../general/modal"))

export default function EditArticlesListRowData({articleId}) {
  let [isOpen, setIsOpen] = useState(false)
  
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return(
    <>
      <List.Button onClick={openModal} type="button" className="text-indigo-600 hover:text-indigo-900">
          Edit
      </List.Button>

      <Suspense>
          { isOpen && <Modal closeModal={closeModal} dataId={articleId} editMode /> }
      </Suspense>
    </>
  )
}