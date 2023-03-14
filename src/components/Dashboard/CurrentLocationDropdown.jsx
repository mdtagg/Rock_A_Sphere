

const CurrentLocation = (props) => {

    function handleClick() {
        setDropdown((prevState) => {
            return !prevState
        })
    }

    return (
        <button class='text-black text-3xl rounded flex items-center gap-1 wide:text-lg wide:font-bold' onClick={handleClick}>
            {props.location.title} 
            <img class='h-5 w-5 wide:h-3 wide:w-3' src='/src/assets/svg/downCaret.svg'></img>
        </button> 
    )
}

export default CurrentLocation