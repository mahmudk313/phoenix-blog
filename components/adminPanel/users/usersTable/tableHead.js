export default function TableHead(thItems) {

    const tableHeadIteams = [
        "users",
        "email",
        "role",
        "Created At",
        "Status"
    ]

    return(
        <thead>
            <tr>
                {tableHeadIteams.map((item, index) => (
                    <th key={index} scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                        {item}
                    </th>
                ))}
                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                </th>
            </tr>
        </thead>
    )
}