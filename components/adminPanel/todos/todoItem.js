import { useDispatch } from "react-redux";
import { toggleTodoDone, deleteTodo } from "../../../src/store/slices/todoSlice";

export default function TodoItem({ text, done, id }) {
    const dispatch = useDispatch();
    let toggleTodoDoneHandler = () => {
        dispatch(toggleTodoDone({ id }))
    }

    let deleteHandle = () => {
        dispatch(deleteTodo({ id }))
    }

    return(
        <div className="flex mb-4 items-center">
            <p className={`w-full text-grey-darkest ${done ? "line-through text-green-800" : ""}`}>{text}</p>
            {
                done
                    ? <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-800 border-green-800 hover:bg-green-800" onClick={toggleTodoDoneHandler}>Done</button>
                    : <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-800 border-gray-800 hover:bg-gray-800" onClick={toggleTodoDoneHandler}>NotDone</button>
            }
            
            <button onClick={deleteHandle} className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-800 border-red-800 hover:text-white hover:bg-red-800">Remove</button>
        </div>
    )
}