import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        list: [
            {
                name: "mahmud",
                lastName: "Bak",
                permission: "admin",
                createDate: "7/19/2022",
                status: "active",
            }
        ]
    },
    reducers: {
        
    }
})

export const {} = usersSlice.actions;
export default usersSlice.reducer;