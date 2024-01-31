import { useContext } from "react"
import { TableHead } from "./components/TableHead";
import { TableBody } from "../TableBody";
import { TableInfoContext } from "../App/contexts/FormContext";

const TableContainer = () => {

    const { buttonTitle } = useContext(TableInfoContext)!

    const hide = 
    buttonTitle !== 'Wet Rock' ? 'hidden' : 'flex'
    
    return (
        <table className={`${hide} flex-col w-2/5 bg-slate-200/50 border-2 border-black ml-11 sm:w-full sm:m-0 wide:w-screen wide:m-0 animate-fadeIn`}>
            <TableHead />
            <TableBody />
        </table>
    )
}

export { TableContainer }
