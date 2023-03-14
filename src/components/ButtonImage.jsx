

const ButtonImage = (props) => {
    return (
        <button class={props.btnClass} onClick={props.onClick}>
            {props.left &&
                <img class={props.imgClass} src={props.src}></img>
            }       
            {props.value}
            {props.right &&
                <img class={props.imgClass} src={props.src}></img>
            }
        </button>
    )
}

export { ButtonImage }