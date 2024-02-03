

export const AnchorNode = (props:{text:string,href:string}) => {
    const {text,href} = props
    return (
        <a
            className="text-black absolute text-[.2rem] font-extrabold"
            href={href}
            target="_blank"
        >
            {text}
        </a>
    )
}