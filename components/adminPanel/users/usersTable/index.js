//Components
import TableHead from "./tableHead"
import UsersTableRow from "./usersTableRow"
import Pagination from "./pagination"

//redux-store
import { useSelector } from "react-redux"

export default function UsersTable () {
    const users = useSelector(state => state.users.list)

    return(
        <table className="min-w-full leading-normal">

            <TableHead />
            
            <tbody>
                {users.map(user => (
                        <UsersTableRow key={user.id} {...user} />
                    )
                )}
                <Pagination />
            </tbody>
        </table>
    )
}