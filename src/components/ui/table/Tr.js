import React from "react";
import clsx from "clsx";
import { useList } from "../../../hooks/useList";

export default function Tr({ children, hover, ...props }) {
    const { isList } = useList();

    return (
        <tr
            {...props}
            className={clsx(
                isList && "border text-gray-700",
                hover && !isList && "hover:bg-gray-300",
            )}
        >{children}</tr>
    );
}
