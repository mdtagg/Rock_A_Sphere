

const PrimaryRockType = (props) => {

    const { color } = getColor(props.rockData.primaryRockClass)

    function getColor(data) {
      
        const color = 
        data === 'sedimentary' ? '#FF8C00' :
        data === 'metamorphic' ? '#AC902A' :
        '#FF0000'

        return { color }
    }

    return (
        <button 
            class='border-2 border-black rounded font-bold w-full text-center sm:text-xs sm:flex sm:justify-center sm:p-0  wide:text-xs' 
            style={{backgroundColor: color}}
        >
            <a 
                class='text-clip' 
                href={`https://en.wikipedia.org/wiki/${props.rockData.primaryRockClass}`} 
                target='_blank'>
                    {props.rockData.primaryRockClass}
            </a>
        </button>
    )
}

export { PrimaryRockType }