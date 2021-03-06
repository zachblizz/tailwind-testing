import React from "react";

export default function Td({ children, ...props }) {
    return (
        <td className="px-4 py-2" {...props}>{children}</td>
    );
}
