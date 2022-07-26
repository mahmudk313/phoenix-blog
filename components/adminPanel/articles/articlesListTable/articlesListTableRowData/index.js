import Link from "next/link"

//Components
import List from "../../../../general/listsShow"

export default function ArticlesListTableRowData({ id, title, authorName, category, tags, comments, status, createDate }) {

    const tDatas = [title, authorName, category, tags.length, comments.length, status, createDate]

    return(
        <>
            {tDatas.map((data, index) => {
                if(data === title) {
                    return(
                        <List.TableData key={index} >
                            <Link href="#">
                                <a>
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        {title}
                                    </p>
                                </a>
                            </Link>
                        </List.TableData>
                    )
                } else if (data === status) {
                    return(
                        <List.TableData key={index} >
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span aria-hidden="true" className={`absolute inset-0 ${ status === "Published" ? "bg-green-200" : "bg-yellow-200" } opacity-50 rounded-full`}>
                                </span>
                                <span className="relative">
                                    {status}
                                </span>
                            </span>
                        </List.TableData>
                    )
                } else {
                    return(
                        <List.TableData key={index} >
                            <p className="text-gray-900 whitespace-no-wrap">
                                {data}
                            </p>
                        </List.TableData>
                    )
                }
            })}
            <List.TableData >
            </List.TableData>
        </>
    )
}