import { createContext } from "react";
import { TableContextType } from "..";

const TableContext = createContext<TableContextType | null>(null)

export default TableContext
