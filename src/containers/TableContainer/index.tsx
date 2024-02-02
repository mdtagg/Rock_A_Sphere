import { useContext } from "react"
import { TableBody } from "../TableBody";
import { TableInfoContext } from "../App/contexts/FormContext";

const TableContainer = () => {

    const { buttonTitle } = useContext(TableInfoContext)!

    const hide = 
    buttonTitle !== 'Wet Rock' ? 'hidden' : 'flex'

    const tHeaderStyles = "border-black p-1 w-1/5 "
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
                scope="col"
                className={`${tHeaderStyles} ${rBorder}`}
            >
                {title}
                {moreInfo}
            </th>
        )
    }
    
    return (
        <table className={`${hide} flex-col w-2/5 bg-slate-200/50 border-2 border-black ml-11 sm:w-full sm:m-0 wide:w-screen wide:m-0 animate-fadeIn`}>
            <thead>
                <tr className='flex wide:text-xs sm:text-xs'>
                    {headerTitles.map((title,idx) => Theader(title,idx))}
                </tr>
            </thead>
            <TableBody />
        </table>
    )
}

export { TableContainer }

/*
fixed cell height widths


*/
