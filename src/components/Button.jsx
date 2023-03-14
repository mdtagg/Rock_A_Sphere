
const Button = (props) => {
    return (
        <button {...props}>
            {props.value}
        </button>
    )
}

export { Button }