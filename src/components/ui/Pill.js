import React, { useMemo } from "react";
import clsx from "clsx";

export default function Pill({ color, txt, hash, inline }) {
    const colors = useMemo(() => ({
        danger: "bg-red-400 text-white",
        warning: "bg-orange-400 text-white",
        success: "bg-green-500 text-white",
        primary: "bg-purple-500 text-white"
    }), []);

    return (
        <span
            className={clsx(
                "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold",
                colors[color] ?? "text-gray-700",
                inline && "mr-2 mb-2"
            )}
        >
            {hash && "#"}{txt}
        </span>
    )
}
