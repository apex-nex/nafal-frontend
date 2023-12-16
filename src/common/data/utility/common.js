import React from "react"

export const ErrorMessageDisplay = ({ error }) => {
    return (
        error &&
        <div className="text-danger small">
            {error}
        </div>
    )
}