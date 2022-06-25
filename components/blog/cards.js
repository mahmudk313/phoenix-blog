import Card from './card'

export default function Cards () {

    //posts will get from API/state
    const posts = [
        {
            title: "What is SaaS? Software as a Service Explained",
            desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some",
            img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            authorName: "Sidi dev",
            date: "Jan 4 2022",
            href: "/blog/article/[title]",
            as: "/blog/article/"
        },
        {
            title: "A Quick Guide to WordPress Hosting",
            desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film",
            img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
            authorName: "Micheal",
            date: "Jan 4 2022",
            href: "/blog/article/[title]",
            as: "/blog/article/"
        },
        {
            title: "7 Promising VS Code Extensions Introduced in 2022",
            desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
            authorName: "Luis",
            date: "Jan 4 2022",
            href: "/blog/article/[title]",
            as: "/blog/article/"
        }
    ]

    return(
        <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {
                posts.map((items, key) => (
                    <Card key={key} items={items} />
                ))
            }
        </div>
    )
}