

const PrimaryRockType = (props) => {

    const { color } = getColor(props.rockData.primaryRockClass)

    function getColor(data) {
      
        const color = 
        data === 'sedimentary' ? '#FF8C00' :
        data === 'metamorphic' ? '#AC902A' :
        '#000000'

        return { color }
    }

    return (
        <div class='border-2 border-black rounded font-bold w-full text-center sm:text-xs sm:flex sm:justify-center sm:p-0  wide:text-xs' style={{backgroundColor: color}}
        >
            <a href={`https://en.wikipedia.org/wiki/${props.rockData.primaryRockClass}`} target='_blank'>{props.rockData.primaryRockClass}</a>
        </div>
    )
}

export { PrimaryRockType }