

function getPageData(currentPageIndex,dataFocus,setDataFocus,itemNum) {
    console.log({dataFocus})
    let areaStartIndex = currentPageIndex
    if(currentPageIndex > 0) {
        areaStartIndex *= itemNum
    }
    console.log({areaStartIndex})
    const areaEndIndex = areaStartIndex + itemNum
    const areaSlice = dataFocus.slice(areaStartIndex,areaEndIndex)
    console.log({areaSlice})
    setDataFocus(areaSlice)
}

export { getPageData }