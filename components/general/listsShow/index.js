function List({children, ...restProps}) {

    return(
        <div {...restProps}>
            {children}
        </div>
    )
}

function Table({ children, ...restProps }) {
    return(
        <table {...restProps}>
            {children}
        </table>
    )
}

function TableHead({children, ...restProps}) {
    return(
        <thead {...restProps}>
            {children}
        </thead>
    )
}

function TableHeadItem ({ children, ...restProps }) {
    return(
        <tr {...restProps}>
            {children}
        </tr>
    )
}

function TableBody({ children, ...restProps }) {
    return(
        <tbody {...restProps}>
            {children}
        </tbody>
    )
}

function TableRow({ children, ...restProps }) {
    return(
        <tr {...restProps}>
            {children}
        </tr>
    )
}

function TableData({ children, ...restProps }) {
    return(
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            {children}
        </td>
    )
}

function Button({ children, ...restProps}) {
    // let defaultProps = {
    //     type: "button",
    //     className: "rounded-md shadow-sm bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    // }

    // let checkProps = (restProps) => {
    //     if(Object.getOwnPropertyNames(restProps).length === 0)
    //         {return (defaultProps)}
    //         else return(restProps)
    // }
    // console.log(restProps)
    // console.log(Object.getOwnPropertyNames(restProps).includes("className"))
    return (
        <button {...restProps} >
            {children}
        </button>
    )
}

function Container ({children, ...restProps}) {
    
    return(
        <div {...restProps}>
            {children}
        </div>
    )
}

function Form ({children, ...restProps}){
    
    return(
        <form className="flex flex-col items-center md:flex-row w-3/4 md:w-full max-w-sm md:space-x-2 space-y-3 md:space-y-0 justify-center h-9" >
            {children}
        </form>
    )
}

//defines and export
List.Table = Table;
List.TableHead = TableHead;
List.TableHeadItem = TableHeadItem;

List.TableBody = TableBody;
List.TableRow = TableRow;
List.TableData = TableData;

List.Button = Button;
List.Form = Form;
List.Container = Container;
export default List;
// listsShow|
//          L  .Table
//                   L  .Head
//                   |
//                   L  .Body
//                      L  .Row
//                          L.Data
//                              L.deleteListItem
//                              L.editListItem
