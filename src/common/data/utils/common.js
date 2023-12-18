import React from "react"

export const ErrorMessageDisplay = ({ error }) => {
    return (
        error &&
        <div className="text-danger small">
            {error}
        </div>
    )
}

export const LoaderComponent = () => (
    <div id="">
        <div id="status">
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        </div>
    </div>
);

export const getStatusClass = (status) => {
    switch (status) {
        case 'pending':
            return 'btn-warning';
        case 'contacted':
            return 'btn-info';
        case 'resolved':
            return 'btn-success';
        default:
            return 'btn-default';
    }
}
