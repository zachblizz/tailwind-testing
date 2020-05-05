import React from "react";

export default function Row({ children, mb }) {
    return (
        <div className={`lg:flex py-5 mb-${mb ?? 4}`}>
            {children}
        </div>
    )
}
