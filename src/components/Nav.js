import React, { useState, useCallback } from "react";
import Menu from "react-heroicons/dist/MdMenu";

import Button from "./ui/Button";

export default function Nav() {
    const [open, setOpen] = useState(false);

    const handleClick = useCallback(() => {
        setOpen(o => !o);
    }, [setOpen]);

    return (
        <header className="flex items-center justify-between bg-purple-700 px-4 h-70">
            <div>
                <div className="font-bold text-purple-900 rounded bg-gray-200 bg-opacity-50 h-full p-3">
                    Specialty Webz
                </div>
            </div>
            <div className="">
                {open && "open"}
                <Button type="button" onClick={handleClick} primary>
                    <Menu className="h-6 w-6" />
                </Button>
            </div>
        </header>
    );
}
