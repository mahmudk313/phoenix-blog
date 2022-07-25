import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        list: [
            // {
            //     firstName: "mahmud",
            //     lastName: "Bak",
            //     role: "admin",
            //     createDate: "7/19/2022",
            //     status: "active",
            //     id: 1,
            //     emailAddress: "mahmudkenway@gmail.com",
            //     imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            // },
        ]
    },
    reducers: {
        addUser: (state, {payload}) => {
            state.list.push(payload.user)
        },
        updateUser: (state, {payload}) => {
            state.list = state.list.filter((user) => user.id !== payload.user.id)
            state.list.push(payload.user)
        },
        deleteUser: (state, {payload}) => {
            state.list = state.list.filter((user) => user.id !== payload.userId)
        }
    }
})

export const { addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;