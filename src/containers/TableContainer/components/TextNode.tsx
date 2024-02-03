
type TTextNode = {
    text:string 
    children?:JSX.Element
    color?:string
}

export const TextNode = (props:TTextNode) => {
    const { color,text,children } = props
    return (
        <>
            <p
                className={`text-xl flex items-center h-full font-bold ${color}`}
            >
                {text}
            </p>
            {children}
        </>
    )
}