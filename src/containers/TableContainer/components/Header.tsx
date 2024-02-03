
const moreInfoText = () => {
    return (
        <p
            className="sm:text-[.4rem] text-[.7rem]"
        >
            (click for more info)
        </p>
    )
}

export const Header = (title:string) => {

    const moreInfo = 
    title === "Primary Rock Type" || title === "Other Rock Types" ? 
    moreInfoText() : 
    null

    return (
        <th
            key={title}
            scope="col"
            className="border-black border-b-2 border-r-2 p-1 w-1/5"
        >
            {title}
            {moreInfo}
        </th>
    )
}