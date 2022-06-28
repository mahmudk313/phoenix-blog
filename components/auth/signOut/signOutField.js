export default function SignOutField({text, htmlfor, type, name, id, autoComplete, select, selectOptions}) {
    return(
        <div className="col-span-6 sm:col-span-3">
            <label htmlFor={htmlfor} className="block text-sm font-medium text-gray-700">
                {text}
            </label>
            {
                !select
                    ? <input
                        type={type}
                        name={name}
                        id={id}
                        required
                        autoComplete={autoComplete}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    : <select
                        id={id}
                        name={name}
                        autoComplete={autoComplete}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        {
                            selectOptions.map(item => <option value={item.value}>{item.text}</option>)
                        }
                    </select>
            }
        </div>
    )
}