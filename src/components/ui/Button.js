import React from "react";
import clsx from "clsx";

export default function Button({ btnTxt, primary, classes, ...props }) {
    return (
        <button
            type="button"
            className={clsx(
                'bg-gray-300 hover:bg-gray-400 focus:bg-gray-400 shadow-sm relative inline-flex items-center px-4 py-2 border text-base leading-6 rounded-md transition ease-in-out duration-150 focus:outline-none',
                primary && "bg-purple-500 text-white font-bold hover:bg-purple-400 focus:bg-purple-400",
                classes
            )}
            {...props}
        >
            {btnTxt ?? props.children}
        </button>
    )
}
