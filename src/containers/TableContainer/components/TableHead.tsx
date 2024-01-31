

const TableHead = () => {

    const tHeaderStyles = "flex-col border-r-2 border-black p-1 w-1/5 justify-center items-center"
    const headerTitles = [
        "Past 7 Total Rain/Snow",
        "Past 3 Total Rain/Snow",
        "Primary Rock Type",
        "Other Rock Types",
        "Days of Fragile Rock Left"
    ]

    const moreInfoText = () => {
        return (
            <p
                className="sm:text-[.4rem] text-[.7rem]"
            >
                (click for more info)
            </p>
        )
    }

    const Theader = (title:string) => {

        const moreInfo = 
        title === "Primary Rock Type" || title === "Other Rock Types" ? 
        moreInfoText() : 
        null

        const noRBorder = title === "Days of Fragile Rock Left" ?
        "border-r-0" : 
        ""

        return (
            <th
                className={`${tHeaderStyles} ${noRBorder}`}
            >
                {title}
                {moreInfo}
            </th>
        )
    }

    return (
        <thead>
            <tr 
                className='
                    flex 
                    wide:text-xs 
                    sm:text-xs
                '
            >
                {headerTitles.map(title => {
                    return (
                        Theader(title)
                    )
                })}
            </tr>
        </thead>
    )
}

export { TableHead }