

function getColor(dataFocus,upperLimit,lowerLimit) {

    return (
    dataFocus >= upperLimit ? 'text-red-600' :
    dataFocus < upperLimit && dataFocus > lowerLimit ? 'text-orange-500':
    'text-green-400'
    )
}

export { getColor }