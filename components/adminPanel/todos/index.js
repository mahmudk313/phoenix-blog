import { useSelector } from "react-redux";

//Components
import TodoInput from "./todoInput";
import TodoItem from "./todoItem";

export default function todos() {
    let todos = useSelector(state => state.todos.list)

    return(
        <main className="h-screen bg-gray-800">

            <div className="h-100 w-full flex items-center justify-center font-sans">
                <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-7xl">
                    <div className="mb-4">
                        <h1 className="text-grey-darkest">Todo List</h1>
                        <TodoInput />
                    </div>
                    <div>
                        {
                            todos.map(todo => <TodoItem key={todo.id} {...todo} />) //todo contains: text, id, status
                        }
                        
                    </div>
                </div>
            </div>
        </main>
    )
}