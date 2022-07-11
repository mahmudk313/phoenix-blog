export default function todos() {
    return(
        <main className="h-screen bg-gray-800">

            <div class="h-100 w-full flex items-center justify-center font-sans">
                <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-7xl">
                    <div class="mb-4">
                        <h1 class="text-grey-darkest">Todo List</h1>
                        <div class="flex mt-4">
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" />
                            <button class="flex-no-shrink p-2 border-2 rounded text-teal-600 border-teal-600 hover:text-white hover:bg-teal-600">Add</button>
                        </div>
                    </div>
                    <div>
                        <div class="flex mb-4 items-center">
                            <p class="w-full text-grey-darkest">Add another component to Tailwind Components</p>
                            <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-800 border-green-800 hover:bg-green-800">Done</button>
                            <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red-800 border-red-800 hover:text-white hover:bg-red-800">Remove</button>
                        </div>
                        <div class="flex mb-4 items-center">
                            <p class="w-full line-through text-green">Submit Todo App Component to Tailwind Components</p>
                            <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">Not Done</button>
                            <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}