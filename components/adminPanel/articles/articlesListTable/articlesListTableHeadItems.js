export default function ArticlesListTableHeadItems () {
    //this could be a dynamic table head item list it converted to a state!
    const articlesTableHeadIteams = [
        "title",
        "author",
        "category",
        "tags",
        "comments",
        "Status",
        "Date",
    ]

    return(
        <>
            {articlesTableHeadIteams.map((item, index) => (
                <th key={index} scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                    {item}
                </th>
            ))}
            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
            </th>
        </>
    )
}