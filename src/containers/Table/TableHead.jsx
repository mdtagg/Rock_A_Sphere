

const TableHead = () => {
    return (
        <thead>
            <tr class='flex wide:text-xs'>
                <th class='border-r-2 border-black p-1 w-1/5 flex justify-center items-center'>Past 7 Rain Total</th>
                <th class='border-r-2 border-black w-1/5 p-1 flex justify-center items-center'>Past 3 Rain Total</th>
                <th class='border-r-2 border-black w-1/5 p-1  flex justify-center items-center'>Primary Rock Type</th>
                <th class='border-r-2 border-black w-1/5 p-1  flex justify-center items-center'>Other Rock Types</th>
                <th class=' w-1/5  flex justify-center items-center'>Days Of Wet Rock Left</th>
            </tr>
        </thead>
    )
}

export { TableHead }