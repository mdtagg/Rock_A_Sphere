

function getPageData(currentPageIndex,dataFocus,setDataFocus,itemNum) {
    let areaStartIndex = currentPageIndex
    if(currentPageIndex > 0) {
        areaStartIndex *= itemNum
    }
    const areaEndIndex = areaStartIndex + itemNum
    const areaSlice = dataFocus.slice(areaStartIndex,areaEndIndex)
    setDataFocus(areaSlice)
}

export { getPageData }