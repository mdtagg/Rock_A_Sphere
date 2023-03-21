

const TableHead = () => {
    return (
        <thead>
            <tr class='flex wide:text-xs sm:text-xs'>
                <th class='flex-col border-r-2 border-black p-1 w-1/5 flex justify-center items-center'>
                    Past 7 Rain Total
                </th>
                <th class='border-r-2 border-black w-1/5 p-1 flex justify-center items-center'>Past 3 Rain Total</th>
                <th class='flex-col border-r-2 border-black w-1/5 p-1  flex justify-center items-center'>
                    Primary Rock Type
                    <p class='flex justify-center items-center w-full whitespace-nowrap sm:text-[.4rem] text-[.7rem]'>(click for more info)</p>
                </th>
                <th class='flex-col border-r-2 border-black w-1/5 p-1  flex justify-center items-center'>
                    Other Rock Types
                    <p class='flex justify-center items-center w-full whitespace-nowrap sm:text-[.4rem] text-[.7rem] '>(click for more info)</p>
                </th>
                <th class=' w-1/5  flex justify-center items-center'>Days Of Fragile Rock Left</th>
            </tr>
        </thead>
    )
}

export { TableHead }