import React from "react";

const Facebook = ({ className }) => {
    return (
        <svg width="15" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.452 27.09V15.15h4.085l.613-4.656H9.452V7.522c0-1.347.38-2.266 2.352-2.266h2.511V1.09c-.434-.055-1.925-.182-3.66-.182-3.623 0-6.103 2.17-6.103 6.152v3.433H.454v4.655h4.098v11.942h4.9Z"
                fill="#3F4246"
                className={className}
            ></path>
        </svg>
    );
};

export default Facebook;