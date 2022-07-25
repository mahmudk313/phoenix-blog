//Redux
import { useDispatch } from "react-redux"
import { deleteUser } from "../../../../src/store/slices/usersSlice";

export default function DeleteUser({ userId }) {
    const dispatch = useDispatch();

    const deleteHandler = (e) => {
        e.preventDefault();
        dispatch(deleteUser({ userId }))
    }
    return (
        <button onClick={deleteHandler} className="ml-2 text-indigo-600 hover:text-indigo-900">
            Delete
        </button>
    )
}