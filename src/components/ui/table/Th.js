import React from "react";
import clsx from "clsx";

export default function Th({ children, ...props }) {
    return (
        <th
            {...props}
            className={clsx(
                "px-4 py-2 text-left bg-gray-400 capitalize",
                props.onClick && "cursor-pointer"
            )}
        >
            {children}
        </th>
    );
}
