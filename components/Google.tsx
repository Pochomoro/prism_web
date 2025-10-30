import React from 'react'

type Props = {
    isWhite?: boolean;
    size?: string;
}


const Google = ({isWhite, size} : Props) => {
    return (
        <div>
            <img src="/images/google.svg" className={`${isWhite ? "invert" : ""}`} alt="logo apple" width={size ?? "20"} height={size ?? "20"} />
        </div>
    )
}
export default Google
