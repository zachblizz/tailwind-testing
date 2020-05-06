import React from "react";
import clsx from "clsx";

export default function NavItem({href, content, first = false, open}) {
    return (
        <a
            href={href ?? "#"}
            className={clsx(
                "font-semibold rounded py-1 px-2 focus:bg-purple-500 hover:bg-purple-500",
                !first && "mt-1 sm:mt-0 sm:ml-2",
                open && "block"
            )}
        >
            {content}
        </a>
    );
}
