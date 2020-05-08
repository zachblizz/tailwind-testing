import React from "react";
import clsx from "clsx";
import { useList } from "../../../hooks/useList";

export default function Th({ children, ...props }) {
    const { isList } = useList();

    return (
        <th
            {...props}
            className={clsx(
                "px-4 py-2 text-left capitalize",
                !isList && "bg-gray-400",
                props.onClick && "cursor-pointer"
            )}
        >
            {children}
        </th>
    );
}
