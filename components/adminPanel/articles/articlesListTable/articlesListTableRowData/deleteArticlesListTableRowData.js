//redux
import { useDispatch } from "react-redux";
import { deleteArticle } from "../../../../../src/store/slices/articlesSlice";

//Components
import List from "../../../../general/listsShow"

export default function DeleteArticlesListTableRowData({articleId}) {
    const dispatch = useDispatch();

    const deleteHandler = (e) => {
        e.preventDefault();
        dispatch(deleteArticle({articleId}))
    }

    return(
        <List.Button onClick={deleteHandler} type="button" className="ml-2 text-indigo-600 hover:text-indigo-900">
            Delete
        </List.Button>
    )
}