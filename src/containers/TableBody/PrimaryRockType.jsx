

const PrimaryRockType = (props) => {
    return (
        <div class='border-2 border-black rounded font-bold w-full text-center sm:text-xs sm:flex sm:justify-center sm:p-0  wide:text-xs' style={{
            backgroundColor:
            props.rockData.primaryRockClass === 'sedimentary' ? '#FF8C00' :
            props.rockData.primaryRockClass === 'metamorphic' ? '#AC902A' :
            '#FF0000'
        }}
        >
            {props.rockData.primaryRockClass}
        </div>
    )
}

export { PrimaryRockType }