export default function Button ({divClassName, aTagProps}) {

    return (
        <div className={divClassName}>
            <a
            href={aTagProps.href}
            className={aTagProps.className}
            >
                {aTagProps.text}
            </a>
        </div>
    )
}