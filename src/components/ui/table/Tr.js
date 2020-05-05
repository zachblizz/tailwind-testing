import React from "react";
import clsx from "clsx";

export default function Tr({ children, hover, ...props }) {
    return (
        <tr
            {...props}
            className={clsx(
                "text-gray-700",
                hover && "hover:bg-gray-300"
            )}
        >{children}</tr>
    );
}
