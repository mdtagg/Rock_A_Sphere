import React from "react"

const PopUp = React.forwardRef((props,ref) => {

    return (
        <div 
            class='h-40 w-40 bg-white border-2 border-black'
            ref={ref}
        >

        </div>
    )
})

export { PopUp }