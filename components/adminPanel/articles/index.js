import List from "../../general/listsShow";
import AddArticle from "./addArticle";
import FilterArticles from "./filterArticles"
import ArticlesListTableHeadItems from "./articlesListTable/articlesListTableHeadItems";
import ArticlesListTableRowData from "./articlesListTable/articlesListTableRowData";

import { useSelector } from "react-redux";

export default function ArticlesList() {
    const articles = useSelector(state => state.articles.list)

    return (
        <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
                    <div>
                        <List.Container className="flex">
                            <List.Container className="flex items-center">
                                <FilterArticles />
                                <AddArticle /> 
                            </List.Container>
                        </List.Container>

                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                
                            <List className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <List.Table className="min-w-full leading-normal">
                                    <List.TableHead>
                                        <List.TableHeadItem>
                                            <ArticlesListTableHeadItems />
                                        </List.TableHeadItem>
                                    </List.TableHead>
                                    <List.TableBody>
                                        { articles.length === 0 
                                            ? <tr><th><h1>No User exist</h1></th></tr>
                                            : articles.map((article) => (
                                                    <List.TableRow key={article.id}>
                                                        <ArticlesListTableRowData {...article} />
                                                    </List.TableRow>
                                                )
                                            )
                                        }
                                    </List.TableBody>
                                </List.Table>
                            </List>

                            {/* <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                                <div className="flex items-center">
                                    <button type="button" className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
                                        <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                            </path>
                                        </svg>
                                    </button>
                                    <button type="button" className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ">
                                        1
                                    </button>
                                    <button type="button" className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                        2
                                    </button>
                                    <button type="button" className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">
                                        3
                                    </button>
                                    <button type="button" className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                                        4
                                    </button>
                                    <button type="button" className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
                                        <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}