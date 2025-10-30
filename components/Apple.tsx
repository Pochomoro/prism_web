import React from 'react'

type Props = {
    isWhite?: boolean;
    size?: string;
}


const Apple = ({isWhite, size} : Props) => {
    return (
        <div>
            <img src="/images/appleLogo.svg" className={`${isWhite ? "invert" : ""}`} alt="logo apple" width={size ?? "20"} height={size ?? "20"} />
        </div>
    )
}
export default Apple
