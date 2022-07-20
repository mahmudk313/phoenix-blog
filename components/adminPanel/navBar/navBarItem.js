import Link from 'next/link'

export default function NavBar({name, href, current}) {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    // let clickHandler = e => {
    //     e.preventDefault();
    //     current = !current
    //     console.log(current)
    // }
    return(
        <>
            <Link href={href} >
                <a
                    key={name}
                    className={classNames(
                    current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'px-3 py-2 rounded-md text-sm font-medium'
                    )}
                    // aria-current={current ? 'page' : undefined}
                >
                    {name}
                </a>
            </Link>
        </>
    )
}