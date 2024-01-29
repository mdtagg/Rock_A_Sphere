import { ReactSetter } from "../../../containers/App"

function getPageData<T>(currentPageIndex:number,dataFocus:T[],setDataFocus:ReactSetter<T[]>,itemNum:number) {
    let areaStartIndex = currentPageIndex
    if(currentPageIndex > 0) {
        areaStartIndex *= itemNum
    }
    const areaEndIndex = areaStartIndex + itemNum
    const areaSlice = dataFocus.slice(areaStartIndex,areaEndIndex)
    setDataFocus(areaSlice)
}

export { getPageData }