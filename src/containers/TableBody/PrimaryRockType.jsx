

const PrimaryRockType = (props) => {
    const { color,query } = primaryData(props.rockData.primaryRockClass)
    
    function primaryData(data) {
        let color = ''
        let query = ''

        switch(data) {
            case 'sedimentary':
                color = '#FF8C00'
                query = 'sedimentary-rock'
                break
            case 'metamorphic':
                color = '#AC902A'
                query = 'metamorphic-rock'
                break
            case 'igneous':
                color = '#FF0000'
                query = 'igneous-rock'
                break
            default:
                color = '#000000'
                query = data
        }
        return { color,query }
    }

    return (
        <div class='border-2 border-black rounded font-bold w-full text-center sm:text-xs sm:flex sm:justify-center sm:p-0  wide:text-xs' style={{backgroundColor: color}}
        >
            <a href={`https://www.britannica.com/science/${query}`} target='_blank'>{props.rockData.primaryRockClass}</a>
        </div>
    )
}

export { PrimaryRockType }