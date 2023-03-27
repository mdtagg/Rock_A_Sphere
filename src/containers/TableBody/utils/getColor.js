

function getColor(dataFocus,upperLimit,lowerLimit) {

    return (
    dataFocus >= upperLimit ? 'text-red-600' :
    dataFocus < upperLimit && dataFocus > lowerLimit ? 'text-orange-400':
    'text-green-500'
    )
}

export { getColor }