import { useContext } from "react"
import { TableHead } from "./components/TableHead";
import { TableBody } from "../TableBody";
import WeatherContext from "../App/contexts/WeatherContext";

const TableContainer = () => {

    const { buttonTitle } = useContext(WeatherContext)

    const hide = 
    buttonTitle !== 'Wet Rock' ? 'hidden' : 'flex'
    
    return (
        <table class={`${hide} flex-col w-2/5 bg-slate-200/50 border-2 border-black ml-11 sm:w-full sm:m-0 wide:w-screen wide:m-0 animate-fadeIn`}>
            <TableHead />
            <TableBody />
        </table>
    )
}

export { TableContainer }
