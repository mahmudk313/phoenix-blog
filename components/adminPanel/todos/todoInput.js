import { useState } from "react"

import { useDispatch } from "react-redux";
import { addTodo } from "./../../../src/store/slices/todoSlice"

export default function TodoInput () {
    const [text, setText] = useState();
    const dispatch = useDispatch();

    let changeHandler = e => {
        e.preventDefault();
        setText(e.target.value)
    }

    let onClickHandler = () => {
        dispatch(addTodo({text, id: Date.now(), done: false}))
        setText('')
    }

    return (
        <div className="flex mt-4">
            <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" 
                placeholder="Add Todo"
                onChange={changeHandler}
                value={text}
            />
            <button 
                className="flex-no-shrink p-2 border-2 rounded text-teal-600 border-teal-600 hover:text-white hover:bg-teal-600"
                onClick={onClickHandler}
            >Add</button>
        </div>
    )
}