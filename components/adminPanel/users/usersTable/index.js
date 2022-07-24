//Components
import TableHead from "./tableHead"
import UsersTableRow from "./usersTableRow"

//redux-store
import { useSelector } from "react-redux"

export default function UsersTable () {
    const users = useSelector(state => state.users.list)

    return(
        <table className="min-w-full leading-normal">

            <TableHead />
            
            <tbody>
                { users.length === 0 
                    ? <tr><th><h1>No User exist</h1></th></tr>
                    : users.map((user) => (
                        <UsersTableRow key={user.id} {...user} />
                        )
                    )
                }
            </tbody>
        </table>
    )
}