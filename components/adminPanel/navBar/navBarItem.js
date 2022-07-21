import Link from 'next/link'

export default function NavBarItem({name, href, current}) {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    
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
                    aria-current={current ? 'page' : undefined}
                >
                    {name}
                </a>
            </Link>
        </>
    )
}