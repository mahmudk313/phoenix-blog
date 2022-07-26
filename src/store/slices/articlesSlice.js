import { createSlice } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
    name: 'articles',
    initialState: {
        list:[
            {
                title: "What is SaaS? Software as a Service Explained",
                desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some",
                text: "Article text",
                thumbnail: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
                authorName: "Sidi dev",
                createDate: "Jan 4 2022",
                category: "no category",
                tags: ["hello world!", "new post"],
                comments: ["Hello world!", "This is a nice compound design pattern"],
                status: "Published",
                href: "/blog/article/[title]",
                as: "/blog/article/",
                id: 23
            },
        ]
    },
    reducers: {
        createArticle: (state, {payload}) => {
            state.list.push(payload.article)
        },
        deleteArticle: (state, {payload}) => {
            state.list = state.list.filter((article) => article.id !== payload.articleId)
        },
        updateArticle: (state, {payload}) => {
            state.list = state.list.filter((article) => article.id !== payload.article.id)
            state.list.push(payload.article)
        }
    }
})

export const { createArticle, deleteArticle, updateArticle } = articlesSlice.actions;
export default articlesSlice.reducer;