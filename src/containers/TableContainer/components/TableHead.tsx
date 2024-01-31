

const TableHead = () => {

    const tHeaderStyles = "flex-col border-black p-1 w-1/5 justify-center items-center"
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

    const Theader = (title:string,idx:number) => {

        const moreInfo = 
        title === "Primary Rock Type" || title === "Other Rock Types" ? 
        moreInfoText() : 
        null

        const rBorder = idx === headerTitles.length - 1 ?
        "border-r-0" : 
        "border-r-2"

        return (
            <th
                key={title}
                className={`${tHeaderStyles} ${rBorder}`}
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
                {headerTitles.map((title,idx) => Theader(title,idx))}
            </tr>
        </thead>
    )
}

export { TableHead }