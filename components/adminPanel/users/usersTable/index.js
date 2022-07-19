//Components
import TableHead from "./tableHead"
import UsersTableRow from "./usersTableRow"
import Pagination from "./pagination"

export default function UsersTable () {

    return(
        <table className="min-w-full leading-normal">

            <TableHead />
            
            <tbody>
                <UsersTableRow />
                <Pagination />
            </tbody>
        </table>
    )
}