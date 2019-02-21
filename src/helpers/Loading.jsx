import React from 'react';

const Loading = (props) => {
    return (
        <div className="loader">
        <i class="fas fa-circle-notch fa-spin"></i>
        <span class="sr-only">Loading...</span>
        </div>
    );
}

export default Loading;